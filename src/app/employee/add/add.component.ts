import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  employee= new FormGroup(
    {firstName: new FormControl('fname'),
    lastName: new FormControl('Test'),
    dob: new FormControl('Test'),
    emailId: new FormControl('Test'),
    mobileNo: new FormControl('Test'),
    gender: new FormControl('Test'),
    address: new FormGroup({
      line1: new FormControl('Test'),
      city: new FormControl('Test'),
      state: new FormControl('Test'),
      country: new FormControl('Test'),
      pinCode: new FormControl('Test')
    })
   
  },

  );
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit(): void {
  }
  addEmployee(employee:any){
console.log("test");

    console.log(JSON.stringify(employee));
  }
}
