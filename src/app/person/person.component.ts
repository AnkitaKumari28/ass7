import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
@ViewChild('PersonForm') personF!:NgForm;
  PersonForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.PersonForm=this._fb.group({
        firstname:['', Validators.required],
        middlename:[''],
        lastname:['', Validators.required],
        department:[''],
        gender:[''],
        dob:['',Validators.required],
        address1:['',Validators.required],
        pincode:[null,[,Validators.required, Validators.min(0),Validators.max(999999)]]
    })
    
}
gender:any[]=[
  {value:"male"},
  {value:"female"}
];

department:any[]=[
  {value:"IT"},
  {value:"HR"},
  {value:"Payroll"},
  {value:"Networking"},
  {value:"Admin"},

];
submit(){
}

}
