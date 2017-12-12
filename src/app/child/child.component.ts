import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
       I am child one working!
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
