import { Component, OnInit } from '@angular/core';
import { ManageUsersComponent } from 'src/app/components/manage-users/manage-users.component';
import { SidebarMenuComponent } from 'src/app/sidebar/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
