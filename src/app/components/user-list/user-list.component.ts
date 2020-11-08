import { Component, OnInit } from '@angular/core';
import { User } from '../../types/user';
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { UserService } from '../../services/user.service';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns_user: string[] = ['id', 'name', 'city', 'button'];
  dataSource_user: MatTableDataSource<User> = new MatTableDataSource([]);
  selectedUser_user: User;
  user_selected: User = null;

  applyFilter_user(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_user.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userService: UserService) { }

  ngOnInit() {this.getData_user();}

  public getData_user(){
    this.userService.getUsers().subscribe(
      (data: Array<User>) => {
        this.dataSource_user.data = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  public selectUser(user: User) {
    this.user_selected = user;
  }
}
