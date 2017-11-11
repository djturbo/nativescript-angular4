import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pt-login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule { }