import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef } from '@angular/core';
import {
  CommonsService,
  FormService,
  Form
} from '../../../../core';
import { StepModelService } from './step-model.service';
import { DocumentCreatorService } from './document-creator.service';
import { SharedService } from '../../shared';
import * as stepsImport from './steps';

@Component({
  selector: 'app-contrato-arras-penitenciales',
  templateUrl: './contrato-arras-penitenciales.component.html'
})
export class ContratoArrasPenitencialesComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalEnd') modalEnd: ElementRef;
  public form: Form = new Form();
  public currentStep = 0;
  public progresBarPercentage = '0%';
  public steps: any = stepsImport.steps;

  constructor(
    private stepModelService: StepModelService,
    private commonsService: CommonsService,
    private sharedService: SharedService,
    private documentCreatorService: DocumentCreatorService,
    private formsService: FormService,
  ) { }

  ngOnInit() {
    this.stepModelService.init(this.steps);
    this.sharedService.setForm(this.form);
    this.formsService.getCertifiedForm('contrato-arras-penitenciales').subscribe(
      certifiedForm => {
        this.form.title = certifiedForm.title;
        this.sharedService.setForm(this.form);
        this.documentCreatorService.init(certifiedForm.uri);
      } );
  }

  ngAfterViewInit() {
    this.commonsService.resizeEditor();
  }

  ngOnDestroy() {
    this.documentCreatorService.destroy();
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  moveStep(type: string) {
    if (type === 'next') {
      this.currentStep += 1;
    } else if (type === 'previous') {
      this.currentStep -= 1;
    }
    this.updateProgressBarPercentage();

    if (this.steps[this.currentStep].type === 'end') {
      this.prepareForCheckout();
    }
  }

  updateProgressBarPercentage() {
    this.progresBarPercentage = Math.round(((this.currentStep / this.steps.length) * 100)) + '%';
  }

  prepareForCheckout() {
    this.form.fields = this.steps;
    this.sharedService.setForm(this.form);
  }

}
