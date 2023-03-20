import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ask-geolocation-modal',
  templateUrl: './ask-geolocation-modal.component.html',
  styleUrls: ['./ask-geolocation-modal.component.scss']
})
export class AskGeolocationModalComponent {

  @Output() positionEmitter = new EventEmitter<any>();
  addressFormControl = new FormControl({}, Validators.required);

  onAddressSelected(position: any) {
    this.addressFormControl.patchValue(position.geometry.location);
  }

  onSubmitPosition() {
    this.positionEmitter.emit(this.addressFormControl.value);
  }
}