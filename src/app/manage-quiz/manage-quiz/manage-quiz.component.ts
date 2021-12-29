import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { quiz } from 'src/app/model/quiz.model';

import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-manage-quiz',
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.css'],
})
export class ManageQuizComponent implements OnInit {
  formValue!: FormGroup;

  quizModelObj: quiz = new quiz();
  quizData!: any;
  items: any = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  OptionItems: any=[];

  constructor(private formBuilder: FormBuilder, private apiquiz: QuizService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      quizname: [''],
    });
    this.getallUser();
  }
  clickAddUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postQuizDetail() {
    this.quizModelObj.quizname = this.formValue.value.quizname;
    this.quizModelObj.questionName = this.formValue.value.questionName;

    this.apiquiz.postQuiz(this.quizModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('quiz added succesfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getallUser();
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  getallUser() {
    this.apiquiz.getQuiz(this.quizData).subscribe((res) => {
      this.quizData = res;
    });
  }

  deleteUser(row: any) {
    console.log('Log id-->', row.id);
    this.apiquiz.deleteQuiz(row.id).subscribe((res) => {
      alert('Employee Deleted');
      this.getallUser();
    });
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.quizModelObj.id = row.id;
    this.formValue.controls['quizname'].setValue(row.quiz);
  }
  updateQuizDetail() {
    this.quizModelObj.quizname = this.formValue.value.quizname;
    console.log(this.quizModelObj.quizname);
    console.log(this.quizModelObj.id);

    this.apiquiz
      .updateQuiz(this.quizModelObj.id, this.quizModelObj)
      .subscribe((res) => {
        alert('update succesfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getallUser();
      });
  }
  onAdduser() {
    console.log(this.items);

    this.items.push(0);
  }
  onAddOptions(){
    this.OptionItems.push(0);
  }
}
