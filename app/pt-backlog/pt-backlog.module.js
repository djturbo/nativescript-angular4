"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pipes_module_1 = require("./pipes/pipes.module");
var pt_item_list_component_1 = require("./pt-item-list/pt-item-list.component");
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
                pipes_module_1.PipesModule
            ],
            exports: [pt_backlog_component_1.PTBacklogComponent],
            providers: [],
        })
    ], PTBacklogModule);
    return PTBacklogModule;
}());
exports.PTBacklogModule = PTBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBRTlFLCtEQUE0RDtBQUM1RCxxREFBbUQ7QUFDbkQsZ0ZBQTJFO0FBWTNFO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBWDNCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVix5Q0FBa0I7Z0JBQ2xCLDRDQUFtQjthQUFDO1lBQ3hCLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLDBCQUFXO2FBQUU7WUFDakIsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IFBUQmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCdcbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBUQmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtTGlzdENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogWyBcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsIFxuICAgICAgICBQaXBlc01vZHVsZSBdLFxuICAgIGV4cG9ydHM6IFtQVEJhY2tsb2dDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFBUQmFja2xvZ01vZHVsZSB7fSJdfQ==