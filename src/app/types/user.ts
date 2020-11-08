export class User {
  id: number;
  name: string;
  city: string;

  constructor(user?: User | any) { // any is for testing
    if (user) {
      // copy constructor
      this.id = user.id;
      this.name = user.name;
      this.city = user.city;
    }
  }
}
