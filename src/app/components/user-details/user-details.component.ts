import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../types/user';
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { UserService } from '../../services/user.service';
import {UserWithFriends} from "../../types/userWithFriends";


@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() selectedUser: User;

  friends: User[] = [];

  userWithFriendsList: UserWithFriends[];

  closeByFriends: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getData_friends();
    this.getData_suggested_friends();
    this.getData_geo_friends();
  }

  public getData_friends(){
    if(this.selectedUser) {
      this.userService.getFriends(this.selectedUser).subscribe(
        (data: Array<User>) => {
          this.friends = data;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  public getData_suggested_friends(){
    if(this.selectedUser) {
      this.userService.getSuggestedFriends(this.selectedUser).subscribe(
        (data: Array<UserWithFriends>) => {
          this.userWithFriendsList = data;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  public getData_geo_friends(){
    if(this.selectedUser) {
      this.userService.getUserSuggestedFriendGeoList(this.selectedUser).subscribe(
        (data: Array<User>) => {
          this.closeByFriends = data;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  public goBack() {
    this.selectedUser = null;
  }

}
