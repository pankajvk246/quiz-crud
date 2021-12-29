import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreatequizService } from 'src/app/services/createquiz.service';
import { createquiz, createquizdemo } from 'src/app/model/createquiz.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})
export class CreateQuizComponent implements OnInit {
  formValue!: FormGroup;

  createquizModelObj: createquiz = new createquiz();
  createquizModelObjdemo: createquizdemo = new createquizdemo();
  quizData!: any;
  items: any = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  OptionItems: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private apicreatequiz: CreatequizService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      quizname: [],
      questionId: [''],
      questionName: [''],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
      correct: [''],
    });
    this.getallUser();
  }
  clickAddUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postQuizDetail() {
    // this.createquizModelObj.quizname = this.formValue.value.quizname;
    this.createquizModelObj.quizname = this.formValue.value.quizname;
    this.createquizModelObj.questionId = this.formValue.value.questionId;
    this.createquizModelObj.questionName = this.formValue.value.questionName;
    this.createquizModelObj.option1 = this.formValue.value.option1;
    this.createquizModelObj.option2 = this.formValue.value.option2;
    this.createquizModelObj.option3 = this.formValue.value.option3;
    this.createquizModelObj.option4 = this.formValue.value.option4;
    this.createquizModelObj.correct = this.formValue.value.correct;

    console.log(this.createquizModelObj);


    this.apicreatequiz.postQuiz(this.createquizModelObj).subscribe(
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
    this.apicreatequiz.getQuiz(this.quizData).subscribe((res) => {
      this.quizData = res;
    });
  }

  deleteUser(row: any) {
    console.log('Log id-->', row.id);
    this.apicreatequiz.deleteQuiz(row.id).subscribe((res) => {
      alert('question Deleted');
      this.getallUser();
    });
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.createquizModelObj.id = row.id;
    this.formValue.controls['questionName'].setValue(row.questionName);
    this.formValue.controls['option1'].setValue(row.option1);
    this.formValue.controls['option2'].setValue(row.option2);
    this.formValue.controls['option3'].setValue(row.option3);
    this.formValue.controls['option4'].setValue(row.option4);
    this.formValue.controls['correct'].setValue(row.correct);
  }
  updateQuizDetail() {
    this.createquizModelObj.questionId = this.formValue.value.questionId;
    this.createquizModelObj.questionName = this.formValue.value.questionName;
    this.createquizModelObj.option1 = this.formValue.value.option1;
    this.createquizModelObj.option2 = this.formValue.value.option2;
    this.createquizModelObj.option3 = this.formValue.value.option3;
    this.createquizModelObj.option4 = this.formValue.value.option4;
    this.createquizModelObj.correct = this.formValue.value.correct;

    console.log(this.createquizModelObj.questionName);
    console.log(this.createquizModelObj.id);

    this.apicreatequiz
      .updateQuiz(this.createquizModelObj.id, this.createquizModelObj)
      .subscribe((res) => {
        alert('update succesfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getallUser();
      });
  }

  onAddOptions() {
    this.OptionItems.push(0);
  }
}



