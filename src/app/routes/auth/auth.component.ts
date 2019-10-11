import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    constructor(
        private titleService: Title
    ) { }

    loginForm: FormGroup;
    registerForm: FormGroup;
    
    // reset form on tab change
	onTabChange(event: EventEmitter<MatTabChangeEvent>) {
		if (event['index'] === 0) {
			this.loginForm.reset();
			
		} else {
			this.registerForm.reset();
			
		}
    }
    
    onLogin() {
        console.log('Logging in...');
    }

    onRegister() {
        console.log('Registering...');
    }

    ngOnInit() {
        // set page title
        this.titleService.setTitle('Login / Register | Canvass+');
        
        // login form
        this.loginForm = new FormGroup({
			loginUsername: new FormControl(null, [Validators.required]),
			loginPassword: new FormControl(null, Validators.required)
		});

        // register form
		this.registerForm = new FormGroup({
			registerName: new FormControl(null, Validators.required),
			registerUsername: new FormControl(null, [Validators.required]),
			registerPassword: new FormControl(null, Validators.required)
		});
    }

}
