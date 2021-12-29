import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  formValue!: FormGroup;

  userModelObj: user=new user();
  userData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;


  constructor(private formBuilder: FormBuilder,
    private apiuser:UserService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      active:[''],
      password:[''],

    });
    this.getallUser();
  }
  clickAddUser(){
    this.formValue.reset();
    this.showAdd =true;
    this.showUpdate=false;
  }
  postUserDetail(){
    this.userModelObj.firstname = this.formValue.value.firstname;
    this.userModelObj.lastname = this.formValue.value.lastname;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.phone = this.formValue.value.phone;
    this.userModelObj.active = this.formValue.value.active;
    this.userModelObj.password = this.formValue.value.password;

    this.apiuser.postUser(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("user added succesfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getallUser();

    },
    err=>{
      alert("something went wrong");
    })

    }

    getallUser(){
      this.apiuser.getUser(this.userData)
      .subscribe(res=>{
        this.userData=res;
      })
    }

    deleteUser(row: any){
       console.log('Log id-->', row.id);
      this.apiuser.deleteUserDetail(row.id)
      .subscribe(res=>{
        alert("User Deleted");
        this.getallUser();
      })
    }
    onEdit(row: any){
      this.showAdd = false;
      this.showUpdate = true;
      this.userModelObj.id=row.id;
      this.formValue.controls['firstname'].setValue(row.firstname);
      this.formValue.controls['lastname'].setValue(row.lastname);
      this.formValue.controls['email'].setValue(row.email);
      this.formValue.controls['phone'].setValue(row.phone);
      this.formValue.controls['active'].setValue(row.active);
      this.formValue.controls['password'].setValue(row.password);

    }
    updateUserDetail(){

    this.userModelObj.firstname = this.formValue.value.firstname;
    console.log(this.userModelObj.firstname);
    console.log(this.userModelObj.id);
    this.userModelObj.lastname = this.formValue.value.lastname;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.phone = this.formValue.value.phone;
    this.userModelObj.active = this.formValue.value.active;
    this.userModelObj.password = this.formValue.value.password;


      this.apiuser
        .updateUser(this.userModelObj.id,this.userModelObj)
        .subscribe((res) => {
          alert('update succesfully');
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.getallUser();
        });
    }


  }


