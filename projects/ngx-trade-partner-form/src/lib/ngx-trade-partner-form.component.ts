import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-trade-partner-form',
  template: `
        <form [formGroup]="fgAdmin">
      <input type="text" placeholder="Enter First Name" formControlName="firstName" />
      <br>
      <span *ngIf="(fcFirstName?.touched || fcFirstName?.dirty) && fcFirstName?.hasError('required')">Required</span>
      <br>
      <input type="text" placeholder="Enter Last Name"  formControlName="lastName" />
      <br>
      <span *ngIf="(fcLastName?.touched || fcLastName?.dirty) && fcLastName?.hasError('required')">Required</span>
      <br>
      <button type="button" (click)="onSave()" *ngIf="isSave">Save</button> &nbsp;
      <button type="button" (click)="onCancel()" *ngIf="isCancel">Cancel</button>
    </form>
  `,
  styles: ``
})
export class NgxTradePartnerFormComponent implements OnInit {
  @Output() emSave = new EventEmitter();
  @Input() isSave: boolean = false;
  @Input() isCancel: boolean = false;
  fgAdmin!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fgAdmin = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSave() {
    if (!this.fgAdmin.valid) {
      this.fgAdmin.markAllAsTouched();
      return;
    }
    this.emSave.emit(this.fgAdmin.value);
    this.fgAdmin.reset();
  }

  onCancel() {
    this.fgAdmin.reset();
    this.fgAdmin.markAsUntouched();
  }

  get fcFirstName() {
    return this.fgAdmin.get('firstName');
  }

  get fcLastName() {
    return this.fgAdmin.get('lastName');
  }
}
