

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/model/login.model';
import { ManageUsersComponent } from 'src/app/components/manage-users/manage-users.component';
import { MainComponent } from 'src/app/main/main/main.component';
import { QuestionComponent } from 'src/app/question/question/question.component';
import { WelcomeComponent } from 'src/app/welcome/welcome/welcome.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router) {}
  loginform!: FormGroup;
  data!: loginModel;

  ngOnInit(): void {
     this.loginform = this.fb.group({
    username : [''],
    password : ['']
  });
}

 OnSubmit(){
  this.data = {
    username : this.loginform.get("username")?.value,
    password : this.loginform.get("password")?.value
  };
   if(this.data.username == "admin" && this.data.password == "admin"){
    //Redirects to ADMIN portal

   this.route.navigate(['/main']);
  }else{
    this.route.navigate(['/welcome']);
  }
    console.log("Data-->",this.data);
}

}

// "question": [
//     { "id": 1, "body": "some comment", "option": [{"option1":"punjab","option2":"himachal"}] }

//     "quiz": [
//       {
//         "question_id":[1,2,3]
//       }
//     ]
//      "question": [{
//        "option_id": [4,5]
//      }]

//       "option": [{}]
