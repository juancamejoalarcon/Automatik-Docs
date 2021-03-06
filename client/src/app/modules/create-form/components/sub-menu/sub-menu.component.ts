import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import {
  CommonsService,
} from '../../../../core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {

  @ViewChild('subMenu', {static: false}) subMenu: ElementRef;
  @ViewChild('linkFormButton', {static: false}) linkFormButton: ElementRef;
  @ViewChild('linkInformationButton', {static: false}) linkInformationButton: ElementRef;
  @Input() isSubmitting: boolean;
  @Input() updatingForm: boolean;
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() submitEvent = new EventEmitter<any>();
  @Output() previewEvent = new EventEmitter<boolean>();
  isDeleting = false;

  constructor(
    private commonsService: CommonsService,
  ) { }

  ngOnInit() {
  }

  @Input()
  set toggleTab(tab: string) {
    if (tab === 'linkFormButton') {
      this.linkFormButton.nativeElement.click();
    } else if (tab === 'linkInformationButton') {
      this.linkInformationButton.nativeElement.click();
    }
  }

  topMenuNav(e: any) {
    this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
  }

  submitForm() {
    this.submitEvent.emit();
  }

  deleteForm() {
    if (confirm('¿Seguro que deseas eliminar?')) {
      this.isDeleting = true;
      this.deleteEvent.emit();
    }
  }

  preview(checked: boolean) {
    this.previewEvent.emit(checked);
  }

}
