import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './login/log-in/log-in.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { MainComponent } from './main/main/main.component';
import { ManageQuizComponent } from './manage-quiz/manage-quiz/manage-quiz.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { QuestionComponent } from './question/question/question.component';
import { ChangeBgDirective } from './change-bg.directive';
import { CreateQuizComponent } from './create-quiz/create-quiz/create-quiz.component';



@NgModule({
  declarations: [
    AppComponent,
    ManageUsersComponent,
    LogInComponent,
    SidebarMenuComponent,
    MainComponent,
    ManageQuizComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective,
    CreateQuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
