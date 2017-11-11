import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './pt-login.component.html',
    selector: 'pt-login'
})
export class LoginComponent implements OnInit {
    public isLoading: boolean = false;
    constructor() { }

    ngOnInit() { }

    login() {
        this.isLoading = true;
        console.log('login tapped');
    }
}