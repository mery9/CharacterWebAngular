import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    loginForm!: FormGroup
    isSumitted = false;
    constructor(private formBuilder:FormBuilder, private userService:UserService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email:['', [Validators.required, Validators.email]],
            password:['',Validators.required]
        });
    }

    get fc() {
        return this.loginForm.controls;
    }

    submit() {
        this.isSumitted = true;
        if(this.loginForm.invalid) return;
        alert(`email: ${this.fc.email.value}, 
            password: ${this.fc.password.value}`)

    }
}
