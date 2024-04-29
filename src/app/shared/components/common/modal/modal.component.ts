import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalTitle: string = "Choose Karma Points";
  @Input() modalContent: string = "Content";

  @Output() closeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  options:any = [
    { value: '1' },
    { value: '2' },
    { value: '5' },
    { value: '10' },
  ]

  close() {
    this.closeEvent.emit();
  }

onChange(event: any) {
  console.log(event);
}

// onChan

  confirm() {
    this.confirmEvent.emit();
  }
}