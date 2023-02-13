import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { PasswordMatchValidator } from '../shared/validators/password_match_validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

    registerForm!:FormGroup;
    isSubmitted = false;

    returnUrl = '';

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
            confirmPassword: ['', Validators.required],
            address: ['', [Validators.required, Validators.minLength(10)]]

        },{
            validators: PasswordMatchValidator('password', 'confirmPassword')
        });

        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    }

    get fc() {
        return this.registerForm.controls;
    }

    submit(){
        this.isSubmitted = true;
        if(this.registerForm.invalid) return;

        // fv = form value
        const fv = this.registerForm.value;
        const user :IUserRegister = {
            name: fv.name,
            email: fv.email,
            password: fv.password,
            confirmPassword: fv.confirmPassword,
            address: fv.address

        };
        this.userService.register(user).subscribe(_ => {
            this.router.navigateByUrl(this.returnUrl);
        })
    }
}
