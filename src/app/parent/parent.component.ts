import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Book } from '../Book';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  book1: Book = new Book(1, 'Book1', true);
  book2: Book = new Book(2, 'Book2', false);

  childData?: string;
  items = [];
  @ViewChild('bookComp1')
  childComponent: ChildComponent | undefined;

  @ViewChildren(ChildComponent)
  childComponents: QueryList<ChildComponent> | undefined;
  ngOnInit(): void {}

  printBookInfo() {
    console.log(this.childComponent?.childBookValue);
    console.log('printing test');
  }

  markAllInStock() {
    console.log(this.childComponents?.length);
    if (this.childComponents !== undefined) {
      for (var obj of this.childComponents) {
        obj.childBookValue.inStock = true;
        console.log(obj);
      }
    }
  }
  sendData(request: string) {
    alert(request);
    this.childData = request;
  }
  //  this.childComponent?.childBookValue.inStock.valueOf.;
}
