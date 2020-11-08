import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserWithFriends} from "../types/userWithFriends";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<Array<User>> {

      const url: string = environment.getUserListUrl;

      return Observable.create(observer => {
        this.http.get(url, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate', // HTTP 1.1
            'Pragma': 'no-cache', // HTTP 1.0
            'Expires': '0' // Proxies
          }),
          observe: 'body'
        })
          .subscribe(
            (res: Array<User>) => {
              observer.next(res);
              observer.complete();

            },
            (error) => {
              console.log(JSON.stringify(error));
              observer.error(error);
              observer.complete();
            });
      });
    }

  public getFriends(user: User): Observable<Array<User>> {

    const url: string = environment.getUserFriendList + user.id;

    return Observable.create(observer => {
      this.http.get(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate', // HTTP 1.1
          'Pragma': 'no-cache', // HTTP 1.0
          'Expires': '0' // Proxies
        }),
        observe: 'body'
      })
        .subscribe(
          (res: Array<User>) => {
            observer.next(res);
            observer.complete();

          },
          (error) => {
            console.log(JSON.stringify(error));
            observer.error(error);
            observer.complete();
          });
    });
  }

  public getSuggestedFriends(user: User): Observable<Array<UserWithFriends>> {

    const url: string = environment.getUserSuggestedFriendList + user.id;

    return Observable.create(observer => {
      this.http.get(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate', // HTTP 1.1
          'Pragma': 'no-cache', // HTTP 1.0
          'Expires': '0' // Proxies
        }),
        observe: 'body'
      })
        .subscribe(
          (res: Array<UserWithFriends>) => {
            observer.next(res);
            observer.complete();

          },
          (error) => {
            console.log(JSON.stringify(error));
            observer.error(error);
            observer.complete();
          });
    });
  }

  public getUserSuggestedFriendGeoList(user: User): Observable<Array<User>> {

    const url: string = environment.getUserSuggestedFriendGeoList + user.id;

    return Observable.create(observer => {
      this.http.get(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate', // HTTP 1.1
          'Pragma': 'no-cache', // HTTP 1.0
          'Expires': '0' // Proxies
        }),
        observe: 'body'
      })
        .subscribe(
          (res: Array<User>) => {
            observer.next(res);
            observer.complete();

          },
          (error) => {
            console.log(JSON.stringify(error));
            observer.error(error);
            observer.complete();
          });
    });
  }

}
