import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Presentación', url: '/presentacion', icon: 'home' },
    { title: 'Multiplicación', url: '/multiplicacion', icon: 'calculator' },
    { title: 'Escoger número mayor', url: '/mayor', icon: 'calculator' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
