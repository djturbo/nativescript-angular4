import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PTBacklogComponent } from './pt-backlog.component';
import { PipesModule } from './pipes/pipes.module';
import { PTItemListComponent } from './pt-item-list/pt-item-list.component'
@NgModule({
    declarations: [
        PTBacklogComponent,
        PTItemListComponent],
    imports: [ 
        CommonModule,
        NativeScriptModule, 
        PipesModule ],
    exports: [PTBacklogComponent],
    providers: [],
})
export class PTBacklogModule {}