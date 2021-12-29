import { Component, OnInit } from '@angular/core';
import { ManageUsersComponent } from 'src/app/components/manage-users/manage-users.component';
import { MainComponent } from 'src/app/main/main/main.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  showvalue!: boolean;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  // changeValue(){
  //   this.showvalue=true;
  //   if(this.showvalue== true ){


  //  this.route.navigate(['/main']);
  // }

// }
}
