import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  submitted:boolean;
  formControls = this.customerService.form.controls;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    alert();
    if(this.customerService.form.get("$key").value == null){
      this.submitted = true;
      alert(this.submitted);
    }
  }

}
