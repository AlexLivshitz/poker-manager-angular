import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>{{title}}</h1>
<sessions-list></sessions-list>     
`
})
export class AppComponent {
  title = 'Manager';
}
