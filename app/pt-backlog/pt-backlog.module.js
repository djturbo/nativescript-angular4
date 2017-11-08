"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
/* Services */
var backlog_service_1 = require("../services/backlog.service");
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
            providers: [backlog_service_1.BacklogService],
        })
    ], PTBacklogModule);
    return PTBacklogModule;
}());
exports.PTBacklogModule = PTBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBQzlFLGNBQWM7QUFDZCwrREFBNkQ7QUFFN0QsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxnRkFBMkU7QUFDM0UsMkRBQXdEO0FBY3hEO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBWjNCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVix5Q0FBa0I7Z0JBQ2xCLDRDQUFtQjthQUFDO1lBQ3hCLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLDBCQUFXO2dCQUNYLDZCQUFZO2FBQUM7WUFDakIsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XG5cbmltcG9ydCB7IFBUQmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCdcbmltcG9ydCB7IFBUSXRlbU1vZHVsZSB9IGZyb20gJy4vcHQtaXRlbS9wdC1pdGVtLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBUQmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtTGlzdENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgUGlwZXNNb2R1bGUsXG4gICAgICAgIFBUSXRlbU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BUQmFja2xvZ0NvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQmFja2xvZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dNb2R1bGUgeyB9Il19