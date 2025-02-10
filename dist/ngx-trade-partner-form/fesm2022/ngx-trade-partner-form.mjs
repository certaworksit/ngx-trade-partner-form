import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Output, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgxTradePartnerFormService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxTradePartnerFormComponent {
    fb;
    emSave = new EventEmitter();
    isSave = false;
    isCancel = false;
    fgAdmin;
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: NgxTradePartnerFormComponent, selector: "ngx-trade-partner-form", inputs: { isSave: "isSave", isCancel: "isCancel" }, outputs: { emSave: "emSave" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-trade-partner-form', template: `
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
  ` }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { emSave: [{
                type: Output
            }], isSave: [{
                type: Input
            }], isCancel: [{
                type: Input
            }] } });

class NgxTradePartnerFormModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormModule, declarations: [NgxTradePartnerFormComponent], imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule], exports: [NgxTradePartnerFormComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormModule, imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxTradePartnerFormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxTradePartnerFormComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                    ],
                    exports: [
                        NgxTradePartnerFormComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-trade-partner-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTradePartnerFormComponent, NgxTradePartnerFormModule, NgxTradePartnerFormService };
//# sourceMappingURL=ngx-trade-partner-form.mjs.map
