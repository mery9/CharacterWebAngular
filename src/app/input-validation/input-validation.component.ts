import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
    required:'Should not be blank!',
    email:'Invalid Email!',
    minlength: 'Field is too short',
    notMatch: 'Does not match!'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit,OnChanges {

    @Input()
    control!:AbstractControl;
    @Input()
    showErrorsWhen:boolean = true;
    errorMessages: string[] = [];
    
    ngOnInit(): void {
        this.control.statusChanges.subscribe(() => {
            this.checkValidation();
        });
        this.control.valueChanges.subscribe(() => {
            this.checkValidation();
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.checkValidation();
    }

    checkValidation(){
        const errors = this.control.errors;
        if(!errors){
            this.errorMessages = [];
            return;
        }

        const errorKeys = Object.keys(errors); //['required', 'email']

        // if key is require then VALIDATORS_MESSAGES will said Should not be blank!'
        this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
    }

}
