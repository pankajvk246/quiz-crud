import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/log-in/log-in.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { MainComponent } from './main/main/main.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { ManageQuizComponent } from './manage-quiz/manage-quiz/manage-quiz.component';
import { QuestionComponent } from './question/question/question.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { CreateQuizComponent } from './create-quiz/create-quiz/create-quiz.component';


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'main', component: MainComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-quiz', component: ManageQuizComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
