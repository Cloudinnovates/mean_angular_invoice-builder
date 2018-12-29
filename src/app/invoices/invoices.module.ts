import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListingComponent } from './component/invoice-listing/invoice-listing.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './services/invoice.service';
import { InvoiceFormComponent } from './component/invoice-form/invoice-form.component';

@NgModule({
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    InvoiceListingComponent,
    InvoiceFormComponent
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoicesModule { }
