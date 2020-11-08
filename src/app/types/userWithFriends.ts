import {User} from "./user";

export class UserWithFriends {
  user: User;
  userFriendsList: Array<User>;

  constructor(userWithFriends?: UserWithFriends | any) { // any is for testing
    if (userWithFriends) {
      // copy constructor
      this.user = userWithFriends.user;
      this.userFriendsList = userWithFriends.userFriendsList;
    }
  }
}
