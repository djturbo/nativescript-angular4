"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pipes_module_1 = require("./pipes/pipes.module");
var pt_item_list_component_1 = require("./pt-item-list/pt-item-list.component");
var pt_item_module_1 = require("./pt-item/pt-item.module");
var PTBacklogModule = (function () {
    function PTBacklogModule() {
    }
    PTBacklogModule = __decorate([
        core_1.NgModule({
            declarations: [
                pt_backlog_component_1.PTBacklogComponent,
                pt_item_list_component_1.PTItemListComponent
            ],
            imports: [
                common_1.CommonModule,
                nativescript_module_1.NativeScriptModule,
                pipes_module_1.PipesModule,
                pt_item_module_1.PTItemModule
            ],
            exports: [pt_backlog_component_1.PTBacklogComponent],
            providers: [],
        })
    ], PTBacklogModule);
    return PTBacklogModule;
}());
exports.PTBacklogModule = PTBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBRTlFLCtEQUE0RDtBQUM1RCxxREFBbUQ7QUFDbkQsZ0ZBQTJFO0FBQzNFLDJEQUF3RDtBQWN4RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVozQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2dCQUNsQiw0Q0FBbUI7YUFBQztZQUN4QixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1osd0NBQWtCO2dCQUNsQiwwQkFBVztnQkFDWCw2QkFBWTthQUFDO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLHlDQUFrQixDQUFDO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBQVEJhY2tsb2dDb21wb25lbnQgfSBmcm9tICcuL3B0LWJhY2tsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgUFRJdGVtTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1saXN0L3B0LWl0ZW0tbGlzdC5jb21wb25lbnQnXG5pbXBvcnQgeyBQVEl0ZW1Nb2R1bGUgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQVEJhY2tsb2dDb21wb25lbnQsXG4gICAgICAgIFBUSXRlbUxpc3RDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlLFxuICAgICAgICBQVEl0ZW1Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQVEJhY2tsb2dDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFBUQmFja2xvZ01vZHVsZSB7IH0iXX0=