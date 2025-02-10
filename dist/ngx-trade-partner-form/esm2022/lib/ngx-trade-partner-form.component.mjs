import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class NgxTradePartnerFormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYWRlLXBhcnRuZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJhZGUtcGFydG5lci1mb3JtL3NyYy9saWIvbmd4LXRyYWRlLXBhcnRuZXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBb0JwRSxNQUFNLE9BQU8sNEJBQTRCO0lBTW5CO0lBTFYsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDN0IsTUFBTSxHQUFZLEtBQUssQ0FBQztJQUN4QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQ25DLE9BQU8sQ0FBYTtJQUVwQixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtJQUFJLENBQUM7SUFFeEMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDaEMsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzt3R0FuQ1UsNEJBQTRCOzRGQUE1Qiw0QkFBNEIsaUpBaEI3Qjs7Ozs7Ozs7Ozs7OztHQWFUOzs0RkFHVSw0QkFBNEI7a0JBbEJ4QyxTQUFTOytCQUNFLHdCQUF3QixZQUN4Qjs7Ozs7Ozs7Ozs7OztHQWFUO2dGQUlTLE1BQU07c0JBQWYsTUFBTTtnQkFDRSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10cmFkZS1wYXJ0bmVyLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZnQWRtaW5cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmlyc3QgTmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0TmFtZVwiIC8+XG4gICAgICA8YnI+XG4gICAgICA8c3BhbiAqbmdJZj1cIihmY0ZpcnN0TmFtZT8udG91Y2hlZCB8fCBmY0ZpcnN0TmFtZT8uZGlydHkpICYmIGZjRmlyc3ROYW1lPy5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlJlcXVpcmVkPC9zcGFuPlxuICAgICAgPGJyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBMYXN0IE5hbWVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibGFzdE5hbWVcIiAvPlxuICAgICAgPGJyPlxuICAgICAgPHNwYW4gKm5nSWY9XCIoZmNMYXN0TmFtZT8udG91Y2hlZCB8fCBmY0xhc3ROYW1lPy5kaXJ0eSkgJiYgZmNMYXN0TmFtZT8uaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5SZXF1aXJlZDwvc3Bhbj5cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblNhdmUoKVwiICpuZ0lmPVwiaXNTYXZlXCI+U2F2ZTwvYnV0dG9uPiAmbmJzcDtcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJpc0NhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgYCxcbiAgc3R5bGVzOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUcmFkZVBhcnRuZXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGVtU2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaXNTYXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzQ2FuY2VsOiBib29sZWFuID0gZmFsc2U7XG4gIGZnQWRtaW4hOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmdBZG1pbiA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMuZmdBZG1pbi52YWxpZCkge1xuICAgICAgdGhpcy5mZ0FkbWluLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbVNhdmUuZW1pdCh0aGlzLmZnQWRtaW4udmFsdWUpO1xuICAgIHRoaXMuZmdBZG1pbi5yZXNldCgpO1xuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5mZ0FkbWluLnJlc2V0KCk7XG4gICAgdGhpcy5mZ0FkbWluLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgZ2V0IGZjRmlyc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZnQWRtaW4uZ2V0KCdmaXJzdE5hbWUnKTtcbiAgfVxuXG4gIGdldCBmY0xhc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZnQWRtaW4uZ2V0KCdsYXN0TmFtZScpO1xuICB9XG59XG4iXX0=