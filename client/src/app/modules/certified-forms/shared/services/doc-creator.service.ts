import { Injectable, ɵConsole } from '@angular/core';
import { CommonsService, ConvertService } from '../../../../core';
import * as AutomatikDocsApi from '../../../../../assets/js/wodotexteditor/localfileeditor.js';
@Injectable()
export class DocCreatorService {

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;
  public documentBodyCloneJustForReplacements: any;
  public resizeEvent: any;
  public scrollToelement = false;

  constructor(
    private commonsService: CommonsService,
    private convertService: ConvertService
  ) { }

  init(uri: any) {
    this.createEditorFromURI('fillForm', 'editorContainer', uri);
    return new Promise((resolve, reject) => {
      const checkIfEditorCreated = setInterval(() => {
        if (
          window['editor'] &&
          window['editor'].getEditorSession() &&
          document.getElementsByTagName('office:text').length) {
          this.originalDocumentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
          clearInterval(checkIfEditorCreated);
          resolve("Document ready");
        }
      }, 20);
    });
  }

  destroy() {
    if (this.commonsService.isBrowser()) {
      AutomatikDocsApi.closeAndDestroyEditor();
      window.removeEventListener('resize', this.resizeEvent);
    }
  }

  createEditorFromURI(formType: string, idOfContainer: string = 'editorContainer', dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    const url = URL.createObjectURL(blob);
    window['DOCUMENTOURL'] = url;
    AutomatikDocsApi.createEditor(formType, idOfContainer);
  }

  getEditorSession() {
    return AutomatikDocsApi.getEditorSession();
  }

  saveUri() {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      AutomatikDocsApi.getEditor().getDocumentAsByteArray((err, data) => {
        if (err) {
          alert(err);
          return;
        }
        const mimetype = 'application/vnd.oasis.opendocument.text',
          blob = new Blob([data.buffer], { type: mimetype });
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
      });
    });
  }

  resizeDocumentContainer() {
    this.resizeEvent = () => {
      setTimeout(() => {
        document.getElementById('webodfeditor-editor1').style.height = '100%';
        document.getElementById('webodfeditor-editor1').style.width = '100%';
        // Fix weird behaviour in Chrome
        AutomatikDocsApi.documentToFitScreen();
      }, 100);
    };
    window.addEventListener('resize', this.resizeEvent);
    AutomatikDocsApi.documentToFitScreen();
  }

  buildDocument(steps: any, scrollToElement: boolean, buildJustReplacements: boolean = false) {
    this.currentDocumentBodyClone = this.originalDocumentBodyClone.cloneNode(true);
    if (buildJustReplacements) {
      this.currentDocumentBodyClone = this.documentBodyCloneJustForReplacements.cloneNode(true);
      this.currentDocumentBodyClone.querySelectorAll('.highlight-disapear').forEach((element) => {
        element.classList.remove('highlight-disapear');
        element.classList.remove('focused');
      });
    } else {
      // 1.- Change doc structure
      this.structuralChanges(steps);
    }
    // 2.- Change values
    this.replacements(steps);

    document.getElementsByTagName('office:text')[0].parentElement.replaceChild(
      this.currentDocumentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]
    );

    this.getEditorSession().getOdfCanvas().refreshSize();
    if (scrollToElement) {
      this.scrollToElementWithClass('focused');
    }
  }

  scrollToElementWithClass(className: any, offset = 0) {
    const element = document.querySelector('.' + className);
    if (element) {
      const cont = document.getElementById('webodfeditor-canvascontainer1');
      const h = cont.clientHeight / 2;
      const elementTop = element.getBoundingClientRect().top;
      const pos = cont.scrollTop + elementTop - h;
      cont.scrollTo({
        top: pos,
        behavior: 'smooth'
      });
    }
  }

  dateToSpanishFormat(dateSelected: string) {
    const dateSelectedObject = new Date(dateSelected);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateToReturn = '';
    if (dateSelected) {
      dateToReturn = dateSelectedObject.toLocaleDateString('es-ES', options);
    }
    return dateToReturn;
  }
  /************************/
  /* INDICATIONS */
  /************************/
  /*****************************/
  showIndicationInsideText(wordToReplace: string, indications: string) {
    const elementContainingWord = document.querySelector(`[data-identifier=${wordToReplace}]`);
    const para = document.createElement('div');
    para.innerHTML = `<div class="indicator-content not-selectable">
                        <button id="close-indication">&#10006;</button>
                        <span class="not-selectable" style="margin:auto; width:100%">${indications}
                        </span>
                    </div>`;
    para.style.top = elementContainingWord.getBoundingClientRect().top.toString();
    para.style.left = elementContainingWord.getBoundingClientRect().left.toString();
    para.classList.add('indicator');
    para.classList.add('smooth-intro');
    para.classList.add('not-selectable');
    elementContainingWord.appendChild(para);

    const removeIndication = (e: any) => {
      if (window.innerWidth > 885) {
        if (e.target.classList.contains('icon-info-circle-solid') || e.target.classList.contains('indication')) {
          if (document.querySelectorAll('.indicator').length >= 2) {
            para.parentNode.removeChild(para);
            window.removeEventListener('click', removeIndication);
          }
        } else {
          para.parentNode.removeChild(para);
          window.removeEventListener('click', removeIndication);
        }
      } else {
        if (e.target.id === 'scrollToTop' || e.target.id === 'close-indication') {
          para.parentNode.removeChild(para);
          window.removeEventListener('click', removeIndication);
        }
      }
    };

    window.addEventListener('click', removeIndication);
    this.scrollToElementWithClass('indicator', para.offsetHeight);
  }
  /*END OF INDICATIONS**********/
  /*****************************/

  /************************/
  /* CHANGE DOC STRUCTURE */
  /************************/
  structuralChanges(steps: any) {
    // console.log(steps);
    steps.forEach((step: any) => {
      if (step.type === 'iRadioC') {
        this.buildForRadioC(step);
      } else if (step.type === 'iCheckbox') {
        this.buildForCheckbox(step);
      } else if (step.type === 'iForEach') {
        this.buildForEach(step);
      }
    });
    this.documentBodyCloneJustForReplacements = this.currentDocumentBodyClone.cloneNode(true);
  }

  buildForEach(step: any) {
    step.content.forEach((content: any) => {
      // Find paragrah
      const elementContainingWord = this.findword(content.wordToReplace);
      // Case where we just have the word, and nothing more
      if (elementContainingWord.textContent === content.wordToReplace) {
        // Reversed copy of the array so we inject elements in order
        const newarray = content.modifiedReplacements.slice().reverse();

        newarray.forEach((modifiedReplacement: any, index: number) => {
          let exactElementContainingWord: any;
          const regexp = new RegExp(step.wordToReplace, 'g');

          if (index !== content.modifiedReplacements.length - 1) {
            const elementContainingWordClone = elementContainingWord.cloneNode(true);
            elementContainingWord.parentNode.insertBefore(elementContainingWordClone, elementContainingWord.nextSibling);
            // add focused if you are adding or removing 
            if (step.forEachFocused) {
              const newSpan = document.createElement('span');
              newSpan.classList.add('highlight-disapear', 'focused');
              elementContainingWordClone.childNodes.forEach((child: any) => { newSpan.appendChild(child) });
              while (elementContainingWordClone.firstChild) { elementContainingWordClone.removeChild(elementContainingWordClone.firstChild); };
              elementContainingWordClone.appendChild(newSpan);
            }
            exactElementContainingWord = elementContainingWordClone;
          } else {
            exactElementContainingWord = elementContainingWord;
          }

          exactElementContainingWord = this.findExactContainingElement(step.wordToReplace, exactElementContainingWord);
          exactElementContainingWord.innerHTML = exactElementContainingWord.innerHTML.replace(regexp, modifiedReplacement);
        });

        const newarray2 = content.modifiedExtraReplacements.slice().reverse();
        newarray2.forEach((modifiedExtraReplacement: any, index: number) => {
          modifiedExtraReplacement.forEach((modifiedExtraReplacementArray: any) => {
            const elementContainingWord2 = this.findword(modifiedExtraReplacementArray[0].identifier);
            const newarray3 = modifiedExtraReplacementArray.slice().reverse();
            newarray3.forEach(((modifiedReplacement: any, indexNewArray3: number) => {
              let exactElementContainingWord2: any;
              const regexp = new RegExp(modifiedReplacement.identifier, 'g');

              if (indexNewArray3 !== modifiedExtraReplacementArray.length - 1) {
                const elementContainingWordClone = elementContainingWord2.cloneNode(true);
                elementContainingWord2.parentNode.insertBefore(elementContainingWordClone, elementContainingWord2.nextSibling);
                exactElementContainingWord2 = this.findExactContainingElement(modifiedReplacement.identifier, elementContainingWordClone);
              } else {
                exactElementContainingWord2 = this.findExactContainingElement(modifiedReplacement.identifier, elementContainingWord2);
              }
              exactElementContainingWord2.innerHTML = exactElementContainingWord2.innerHTML
                .replace(regexp, modifiedReplacement.replacement);
            }));

          });
        });
        // Case where we have a single textNode that contains inside the wordToTReplace
      } else if (elementContainingWord.textContent.includes(content.wordToReplace) && (elementContainingWord.childElementCount <= 1)) {
        const newarray = content.modifiedReplacements.slice().reverse();
        const regexp = new RegExp(step.wordToReplace, 'g');
        const textContent = elementContainingWord.textContent;
        const firstHalfString = textContent.slice(0, textContent.indexOf(content.wordToReplace))
        const secondHalfString = textContent.slice(textContent.indexOf(content.wordToReplace), textContent.length);
        let secondHalfStringWithoutWordtoReplace = secondHalfString.replace(regexp, '');
        newarray.forEach((modifiedReplacement: any, index: number) => {
          secondHalfStringWithoutWordtoReplace = modifiedReplacement + secondHalfStringWithoutWordtoReplace;
        });
        elementContainingWord.innerHTML = `<span>${firstHalfString + secondHalfStringWithoutWordtoReplace}</span>`;
      }
    });
    step.forEachFocused = false;
  }

  buildForRadioC(step: any) {
    let elementContainingWord = this.findword(step.wordToReplace);
    const regexp = new RegExp(step.wordToReplace, 'g');
    let replacement: string;
    step.radios.forEach((radio) => {
      if (radio.checked) {
        if (step.isFocused || step.radioCfocused) {
          replacement = `<span class="highlight-disapear focused">${radio.replacement}</span>`;
        } else {
          replacement = radio.replacement;
        }
        step.extraReplacements.forEach((extraReplacement: any, index: any) => {
          const regexp2 = new RegExp(extraReplacement.wordToReplace, 'g');
          const elementContainingReplacementWord = this.findword(extraReplacement.wordToReplace);
          const exactElementContainingReplacementWord =
            this.findExactContainingElement(extraReplacement.wordToReplace, elementContainingReplacementWord);
          let replacement2: any;
          radio.extraReplacements.forEach((radioExtraReplacement: any) => {
            if (radioExtraReplacement.insideId === extraReplacement.insideId) {
              replacement2 = radioExtraReplacement.replacement;
            }
          });
          exactElementContainingReplacementWord.innerHTML = exactElementContainingReplacementWord.innerHTML
            .replace(regexp2, replacement2);
        });
      }
    });

    elementContainingWord = this.findExactContainingElement(step.wordToReplace, elementContainingWord);
    while (elementContainingWord.firstElementChild !== null && !this.allElementsAreBr(elementContainingWord)) {
      elementContainingWord = elementContainingWord.firstElementChild;
    }
    elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
    step.radioCfocused = false;
  }

  // // Case where all children elements are br
  allElementsAreBr(elementContainingWord: HTMLElement) {
    let allElementsAreBr = true;
    const children: HTMLCollection = elementContainingWord.children;
    for (let i: number; i < children.length; i++) {
      if (children[i].tagName !== 'BR') {
        allElementsAreBr = false;
      }
    }
    if (!children.length) {
      allElementsAreBr = false;
    }
    return allElementsAreBr;
  }

  buildForCheckbox(step: any) {
    const elementContainingWord = this.findword(step.wordToReplace);
    let replacement = step.replacement;
    step.checkboxes.forEach((checkbox) => {
      // Check if it contains the word (rules)
      if (step.replacement.includes(checkbox.wordToReplace)) {
        if (checkbox.checked) {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, checkbox.replacement);
        } else {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, '');
        }
      }
    });
    // Case where we have just one paragraph with the wordToReplace
    if (elementContainingWord.innerHTML === step.wordToReplace) {
      elementContainingWord.innerHTML = replacement;
    }
  }
  /*****************************/
  /*END OF CHANGE DOC STRUCTURE*/
  /*****************************/

  replacements(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iText' || step.type === 'iDate' || step.type === 'iNumber') {
        const elementsContainingWord = this.findAllwords(step.wordToReplace);
        const regexp = new RegExp(step.wordToReplace, 'g');
        elementsContainingWord.forEach((elementContainingWord: any) => {
          let element = elementContainingWord;
          let replacement = step.replacement;
          if (element.innerHTML !== step.wordToReplace) {
            // Find the innermost element containing the word
            element = this.findExactContainingElement(step.wordToReplace, element);
          }
          if (step.type === 'iDate') {
            replacement = this.dateToSpanishFormat(step.replacement);
          }
          if (step.isEmpty) {
            if (step.replacement !== '') {
              if (step.isEmpty.prepend) {
                if (replacement.slice(0, step.isEmpty.prepend.length) === step.isEmpty.prepend) {
                  replacement = replacement.slice(step.isEmpty.prepend.length, replacement.length);
                }
                replacement = step.isEmpty.prepend + replacement;
              }
              if (step.isEmpty.append) {
                if (replacement.slice(-step.isEmpty.append.length) === step.isEmpty.append) {
                  replacement = replacement.slice(0, -step.isEmpty.prepend.length);
                }
                replacement = replacement + step.isEmpty.append;
              }
            } else {
              if (step.isEmpty.defaultValue) {
                replacement = step.isEmpty.defaultValue;
              }
            }
          }
          if (element) {
            element.innerHTML = element.innerHTML.replace(regexp,
              `<span class="${step.isFocused ? 'highlight focused' : ''}" data-identifier="${step.wordToReplace}">${replacement}</span>`);
          }
        });
      } else if (step.type === 'iRadioB') {
        const elementsContainingWord = this.findAllwords(step.wordToReplace);
        let replacement: any;
        const regexp = new RegExp(step.wordToReplace, 'g');
        elementsContainingWord.forEach((elementContainingWord: any) => {
          step.radios.forEach((radio) => {
            if (radio.checked) {
              replacement = radio.replacement;
              let element = elementContainingWord;
              if (element.innerHTML !== step.wordToReplace) {
                // Find the innermost element containing the word
                element = this.findExactContainingElement(step.wordToReplace, element);
              }
              if (element) {
                element.innerHTML = element.innerHTML.replace(regexp,
                  `<span class=" ${step.isFocused ? 'highlight focused' : ''}" data-identifier="${step.wordToReplace}">${step.replacement}</span>`);
              }
            }
          });
        });
      }
      // Extra replacements
      if (step.extraReplacements && step.extraReplacements.length) {
        step.extraReplacements.forEach((extraReplacement: any) => {
          const elementsContainingWord = this.findAllwords(extraReplacement.wordToReplace);
          const regexp = new RegExp(extraReplacement.wordToReplace, 'g');
          elementsContainingWord.forEach((elementContainingWord: any) => {
            let element = elementContainingWord;
            let replacement = extraReplacement.replacement;
            if (element.innerHTML !== extraReplacement.wordToReplace) {
              // Find the innermost element containing the word
              element = this.findExactContainingElement(extraReplacement.wordToReplace, element);
            }

            if (element) {
              element.innerHTML = element.innerHTML.replace(regexp,
                `<span class="${extraReplacement.isFocused ? 'highlight focused' : ''}" data-identifier="${extraReplacement.wordToReplace}">${replacement}</span>`);
            }
          });
        })
      }
    });
  }

  findword(wordToReplace: string, bodyClone: any = this.currentDocumentBodyClone) {
    // USE ARRAY FOR ALL VALUES
    const children = bodyClone.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (!this.elementIsExcluded(children[i])) {
        if (children[i].innerHTML.includes(wordToReplace) || children[i].textContent.includes(wordToReplace)) {
          return children[i];
        }
      }
    }
  }

  findAllwords(wordToReplace: string, bodyClone: any = this.currentDocumentBodyClone) {
    const allEelementsContainingWord = [];
    const children = bodyClone.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (!this.elementIsExcluded(children[i])) {
        if (children[i].innerHTML.includes(wordToReplace)) {
          allEelementsContainingWord.push(children[i]);
        }
      }
    }
    return allEelementsContainingWord;
  }

  findExactContainingElement(wordToReplace: string, bodyClone: any) {
    let element: any = bodyClone;
    while (element.childNodes && element.childNodes.length > 0 && element.innerHTML.includes(wordToReplace)) {
      element.childNodes.forEach(((el: any) => {
        if (el.nodeName !== '#text') {
          if (el.innerHTML.includes(wordToReplace)) {
            element = el;
          }
        } else {
          if (el.textContent.includes(wordToReplace)) {
            element = el;
          }
        }
      }));
    }
    if (element.nodeName === '#text') {
      element = element.parentNode;
    }

    element = this.fixSomeCases(wordToReplace, element)

    return element;
  }

  fixSomeCases(wordToReplace: string, el: HTMLElement) {
    let element: HTMLElement = el
    if (wordToReplace === el.textContent) {
      if (element.tagName === "text:p") {
        if (element.childElementCount === 2) {
          if (element.firstElementChild.tagName === 'text:span' && element.firstElementChild.nextElementSibling.tagName === 'text:span') {
            element.firstElementChild.innerHTML = `<span>${wordToReplace}</span>`
            element.firstElementChild.nextElementSibling.innerHTML = ''
          }
        }
      }
    }
    return el
  }

  elementIsExcluded(element: any) {
    const excludedElements = [
      'office:text',
      'text:sequence-decls',
      'text:sequence-decl',
      'draw:frame',
      'draw:image',
      'office:annotation',
      'office:annotation-end',
      'dc:creator',
      'dc:date'
    ];
    return excludedElements.includes(element.nodeName);
  }

  downloadWord(formId: string, formURI: string) {
    this.commonsService.toggleSpinner();
    this.saveUri().then((uri: string) => {
      this.convertService.toWord(formId, uri).subscribe((data) => {
        const byteString = atob(data.word.split(',')[1]);
        const mimeString = data.word.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const url = URL.createObjectURL(blob);
        console.log(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'word.doc';
        a.click();
        this.commonsService.toggleSpinner();
      });
    });
  }

  downloadPdf(formId: string, formURI: string) {
    this.commonsService.toggleSpinner();
    this.saveUri().then((uri: string) => {
      this.convertService.toPdf(formId, uri).subscribe((data) => {
        const byteString = atob(data.pdf.split(',')[1]);
        const mimeString = data.pdf.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const url = URL.createObjectURL(blob);
        console.log(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.pdf';
        a.click();
        this.commonsService.toggleSpinner();
      });
    });
  }
}
