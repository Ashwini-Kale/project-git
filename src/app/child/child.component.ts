import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works I am child one!
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
