import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  routerLink!: Router;
  title = 'quiz-crud';
  show = false;

  load() {
    this.show = true;
  }
}
