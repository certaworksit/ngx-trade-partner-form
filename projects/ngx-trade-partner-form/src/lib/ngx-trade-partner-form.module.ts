import { NgModule } from '@angular/core';
import { NgxTradePartnerFormComponent } from './ngx-trade-partner-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
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
})
export class NgxTradePartnerFormModule { }
