import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-session-button',
  template: `
<button id="add-session-btn">Add Session</button>
`,
  styleUrls: ['./add-game-button.component.css']
})
export class AddSessionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
