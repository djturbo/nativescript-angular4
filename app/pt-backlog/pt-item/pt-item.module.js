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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxnRkFBOEU7QUFFOUUseURBQXNEO0FBQ3RELCtGQUEwRjtBQWMxRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVp4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1lBQzFCLFlBQVksRUFBRTtnQkFDVixtQ0FBZTtnQkFDZiwrREFBNEI7YUFDL0I7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLGVBQWUsRUFBRTtnQkFDYiwrREFBNEI7YUFDL0I7U0FDSixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IFBUSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1BUSXRlbUNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBUSXRlbUNvbXBvbmVudCxcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtTW9kdWxlIHsgfVxuIl19