import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_EDIT_DESCRIPTION_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/User';


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
    public userObservable:Observable<User>;
    constructor(private http:HttpClient, private toastrService:ToastrService) { 
        this.userObservable = this.userSubject.asObservable();
    }

    // I stand for interface
    login(userLogin:IUserLogin):Observable<User> {
        return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
            tap({
                next: (user) => {
                    this.setUserToLocalStorage(user)
                    this.userSubject.next(user);
                    this.toastrService.success(
                        `Welcome to Character Project! ${user.name}!`,
                        'Login Successful'
                    )
                },
                error: (errorResponse) => {
                    this.toastrService.error(errorResponse.error, 'Login Failed')
                }
            })
        );
    }

    register(userRegister:IUserRegister): Observable<User>{
        return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
            tap({
                next: (user) => {
                    this.setUserToLocalStorage(user);
                    this.userSubject.next(user);
                    this.toastrService.success(
                        `Welcome to the Character Project ${user.name}`,
                        'Register Successfully'
                    )
                },
                error: (errorResponse) => {
                    this.toastrService.error(errorResponse.error,
                        'Register Failed')
                }
            })
        )

    }

    logout() {
        this.userSubject.next(new User());
        localStorage.removeItem(USER_KEY);
        window.location.reload();
    }

    private setUserToLocalStorage(user:User) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUserFromLocalStorage():User {
        const userJson = localStorage.getItem(USER_KEY);
        if(userJson) return JSON.parse(userJson) as User; //If don't has user it will send new user info
        return new User();
    }

    public getUser(): User {
        return this.getUserFromLocalStorage();
    }

    updateDescription(description: string): Observable<User> {
        const url = `${USER_EDIT_DESCRIPTION_URL}/editdescription`;
        return this.http.put<User>(url, { description }).pipe(
          tap({
            next: (user) => {
              this.setUserToLocalStorage(user);
              this.userSubject.next(user);
              this.toastrService.success('Description updated successfully');
            },
            error: (errorResponse) => {
              this.toastrService.error(errorResponse.error, 'Failed to update description');
            }
          })
        );
      }
      

}




