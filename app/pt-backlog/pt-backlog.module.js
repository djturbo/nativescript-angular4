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
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var PTBacklogModule = (function () {
    function PTBacklogModule() {
    }
    PTBacklogModule = __decorate([
        core_1.NgModule({
            declarations: [
                pt_backlog_component_1.PTBacklogComponent,
                pt_item_list_component_1.PTItemListComponent,
                add_item_modal_component_1.AddItemModalComponent
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
            entryComponents: [add_item_modal_component_1.AddItemModalComponent]
        })
    ], PTBacklogModule);
    return PTBacklogModule;
}());
exports.PTBacklogModule = PTBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBQzlFLGNBQWM7QUFDZCwrREFBNkQ7QUFDN0QsaUNBQWlDO0FBQ2pDLGtFQUF3RjtBQUV4RiwrREFBNEQ7QUFDNUQscURBQW1EO0FBQ25ELGdGQUEyRTtBQUMzRSwyREFBd0Q7QUFDeEQsOEVBQTBFO0FBaUIxRTtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWYzQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2dCQUNsQiw0Q0FBbUI7Z0JBQ25CLGdEQUFxQjthQUFDO1lBQzFCLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLDBCQUFXO2dCQUNYLDZCQUFZO2dCQUNaLHdDQUE4QjthQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLHlDQUFrQixDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsZUFBZSxFQUFFLENBQUMsZ0RBQXFCLENBQUM7U0FDM0MsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2UnO1xuLyogTmF0aXZlU2NyaXB0IFBSTyBVSSBNb2R1bGVzICovXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgUFRCYWNrbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1iYWNrbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaXBlc01vZHVsZSB9IGZyb20gJy4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7IFBUSXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0tbGlzdC9wdC1pdGVtLWxpc3QuY29tcG9uZW50J1xuaW1wb3J0IHsgUFRJdGVtTW9kdWxlIH0gZnJvbSAnLi9wdC1pdGVtL3B0LWl0ZW0ubW9kdWxlJztcbmltcG9ydCB7IEFkZEl0ZW1Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2FkZC1pdGVtLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBUQmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtTGlzdENvbXBvbmVudCxcbiAgICAgICAgQWRkSXRlbU1vZGFsQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBQaXBlc01vZHVsZSxcbiAgICAgICAgUFRJdGVtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQVEJhY2tsb2dDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0JhY2tsb2dTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtBZGRJdGVtTW9kYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBUQmFja2xvZ01vZHVsZSB7IH0iXX0=