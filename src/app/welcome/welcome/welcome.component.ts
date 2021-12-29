import { viewClassName } from '@angular/compiler';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { QuestionComponent } from 'src/app/question/question/question.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') namekey!: ElementRef;

  constructor() {}

  ngOnInit(): void {

  }
  startQuiz() {
    localStorage.setItem("name",this.namekey.nativeElement.value);


  }

}


