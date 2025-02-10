import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NgxTradePartnerFormComponent implements OnInit {
    private fb;
    emSave: EventEmitter<any>;
    isSave: boolean;
    isCancel: boolean;
    fgAdmin: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSave(): void;
    onCancel(): void;
    get fcFirstName(): import("@angular/forms").AbstractControl<any, any> | null;
    get fcLastName(): import("@angular/forms").AbstractControl<any, any> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxTradePartnerFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxTradePartnerFormComponent, "ngx-trade-partner-form", never, { "isSave": { "alias": "isSave"; "required": false; }; "isCancel": { "alias": "isCancel"; "required": false; }; }, { "emSave": "emSave"; }, never, never, false, never>;
}
