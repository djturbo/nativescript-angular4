import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { PTItemComponent } from './pt-item.component';
@NgModule({
    declarations: [
        PTItemComponent
    ],
    imports: [
        CommonModule,
        NativeScriptModule],
    exports: [
        PTItemComponent
    ],
    providers: [],
})
export class PTItemModule { }