"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pt_item_component_1 = require("./pt-item.component");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    PTItemModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule],
            exports: [pt_item_component_1.PTItemComponent],
            declarations: [
                pt_item_component_1.PTItemComponent,
                item_type_picker_modal_component_1.ItemTypePickerModalComponent,
                item_type_picker_modal_component_1.ItemTypePickerModalComponent
            ],
            providers: [],
            entryComponents: [
                item_type_picker_modal_component_1.ItemTypePickerModalComponent
            ]
        })
    ], PTItemModule);
    return PTItemModule;
}());
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxnRkFBOEU7QUFFOUUseURBQXNEO0FBR3RELCtGQUEwRjtBQWUxRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1lBQzFCLFlBQVksRUFBRTtnQkFDVixtQ0FBZTtnQkFDZiwrREFBNEI7Z0JBQzVCLCtEQUE0QjthQUMvQjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsZUFBZSxFQUFFO2dCQUNiLCtEQUE0QjthQUMvQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgUFRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWRldGFpbHMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BUSXRlbUNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBUSXRlbUNvbXBvbmVudCxcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCxcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtTW9kdWxlIHsgfVxuIl19