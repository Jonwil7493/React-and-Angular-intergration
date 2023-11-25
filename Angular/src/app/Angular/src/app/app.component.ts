import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'Angular/src/app/Angular/src/app/app.component.html',
  styleUrls: ['Angular/src/app/Angular/src/app/app.component.ts']
})
export class AppComponent {
  userMessage = '';
  displayText = 'Hello World';

  displayMessage() {
    this.displayText = this.userMessage || 'Hello World';
  }
}
