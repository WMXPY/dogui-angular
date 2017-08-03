import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dog-title',
  template: `
    <div>
      title Works!
    </div>
  `,
  styles: [
    `
      div{
        background-color: red;
        padding: 0px;
        margin: 0px;
      }
    `
  ]
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
