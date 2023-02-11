import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr/public_api';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userSubject = new BehaviorSubject<User>(new User());
    public userObservable:Observable<User>;
    constructor(private http:HttpClient, private toastrService:ToastrService) { 
        this.userObservable = this.userSubject.asObservable();
    }

    // I stand for interface
    login(userLogin:IUserLogin):Observable<User> {
        return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
            tap({
                next: (user) => {
                    this.userSubject.next(user);
                    this.toastrService.success(
                        `Welcome to Character Project! ${user.name}!`,
                        'Login Successful'
                    )
                },
                error: (errorResponse) = {
                    this.toastrService.error(errorResponse.error, 'Login Failed')
                }
            })
        );
    }
}
