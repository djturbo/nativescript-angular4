import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
/* Services */
import { BacklogService } from '../services/backlog.service';
/* NativeScript PRO UI Modules */
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { PTBacklogComponent } from './pt-backlog.component';
import { PipesModule } from './pipes/pipes.module';
import { PTItemListComponent } from './pt-item-list/pt-item-list.component'
import { PTItemModule } from './pt-item/pt-item.module';
import { AddItemModalComponent } from './shared/add-item-modal.component';

@NgModule({
    declarations: [
        PTBacklogComponent,
        PTItemListComponent,
        AddItemModalComponent],
    imports: [
        CommonModule,
        NativeScriptModule,
        PipesModule,
        PTItemModule,
        NativeScriptUISideDrawerModule],
    exports: [PTBacklogComponent],
    providers: [BacklogService],
    entryComponents: [AddItemModalComponent]
})
export class PTBacklogModule { }