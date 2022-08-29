import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()
  childBookValue:Book = new Book();

  @Output()
  test = new EventEmitter<any>();
  parentInputValue?:string
  testingReference(test:string ){
    this.parentInputValue = test
    alert(test);
  }


  ngOnInit(): void {
    console.log(this.childBookValue);
    
  }

  sendDataToParent(request:String){
    this.test.emit(request);
  }

}
