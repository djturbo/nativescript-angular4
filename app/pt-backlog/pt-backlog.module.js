"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
/* Services */
var backlog_service_1 = require("../services/backlog.service");
/* NativeScript PRO UI Modules */
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
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
                pt_item_module_1.PTItemModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            exports: [pt_backlog_component_1.PTBacklogComponent],
            providers: [backlog_service_1.BacklogService],
        })
    ], PTBacklogModule);
    return PTBacklogModule;
}());
exports.PTBacklogModule = PTBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBQzlFLGNBQWM7QUFDZCwrREFBNkQ7QUFDN0QsaUNBQWlDO0FBQ2pDLGtFQUF3RjtBQUV4RiwrREFBNEQ7QUFDNUQscURBQW1EO0FBQ25ELGdGQUEyRTtBQUMzRSwyREFBd0Q7QUFleEQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFiM0IsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLHlDQUFrQjtnQkFDbEIsNENBQW1CO2FBQUM7WUFDeEIsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHdDQUFrQjtnQkFDbEIsMEJBQVc7Z0JBQ1gsNkJBQVk7Z0JBQ1osd0NBQThCO2FBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XG4vKiBOYXRpdmVTY3JpcHQgUFJPIFVJIE1vZHVsZXMgKi9cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBQVEJhY2tsb2dDb21wb25lbnQgfSBmcm9tICcuL3B0LWJhY2tsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgUFRJdGVtTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1saXN0L3B0LWl0ZW0tbGlzdC5jb21wb25lbnQnXG5pbXBvcnQgeyBQVEl0ZW1Nb2R1bGUgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQVEJhY2tsb2dDb21wb25lbnQsXG4gICAgICAgIFBUSXRlbUxpc3RDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlLFxuICAgICAgICBQVEl0ZW1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BUQmFja2xvZ0NvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQmFja2xvZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dNb2R1bGUgeyB9Il19