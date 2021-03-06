import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss']
})
export class InvoiceViewComponent implements OnInit {

  invoice: Invoice;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { invoiceFetchingFromUrl: Invoice }) => {
      console.log(data.invoiceFetchingFromUrl);
      this.invoice = data.invoiceFetchingFromUrl;
    });
  }

}
