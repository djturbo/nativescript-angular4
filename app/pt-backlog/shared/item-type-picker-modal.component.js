"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//angular imports
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
//app imports
var static_data_1 = require("../../shared/static-data");
var ItemTypePickerModalComponent = (function () {
    function ItemTypePickerModalComponent(params) {
        this.params = params;
    }
    ItemTypePickerModalComponent.prototype.close = function () {
        this.params.closeCallback(null);
    };
    ItemTypePickerModalComponent.prototype.ngOnInit = function () {
        this.prompt = this.params.context.promptMsg;
        this.itemTitle = this.params.context.itemTitle;
        var theItems = [];
        for (var enumMember in static_data_1.ItemTypeEnum) {
            var intVal = parseInt(enumMember, 10);
            var isValueProperty = intVal >= 0;
            if (isValueProperty) {
                theItems.push({ value: enumMember, title: static_data_1.ItemTypeEnum[enumMember], img: static_data_1.ItemTypeEnum.getImage(intVal) });
            }
        }
        this.items = theItems;
    };
    ItemTypePickerModalComponent.prototype.typeSelect = function (args) {
        this.params.closeCallback(static_data_1.ItemTypeEnum[args]);
    };
    ItemTypePickerModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-type-picker-modal',
            templateUrl: 'item-type-picker-modal.component.html'
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ItemTypePickerModalComponent);
    return ItemTypePickerModalComponent;
}());
exports.ItemTypePickerModalComponent = ItemTypePickerModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlCQUFpQjtBQUNqQixzQ0FBa0Q7QUFJbEQsbUVBQWdHO0FBR2hHLGFBQWE7QUFDYix3REFBd0Q7QUFReEQ7SUFNSSxzQ0FBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBSSxDQUFDO0lBRTNDLDRDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRS9DLElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7UUFFakMsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksMEJBQVksQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSwwQkFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSwwQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUcsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRU0saURBQVUsR0FBakIsVUFBa0IsSUFBUztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQywwQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTlCUSw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSx1Q0FBdUM7U0FDdkQsQ0FBQzt5Q0FPOEIsMkJBQWlCO09BTnBDLDRCQUE0QixDQStCeEM7SUFBRCxtQ0FBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhLCBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5cbi8vYXBwIGltcG9ydHNcbmltcG9ydCB7IEl0ZW1UeXBlRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2l0ZW0tdHlwZS1waWNrZXItbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHByb21wdDogc3RyaW5nO1xuICAgIHB1YmxpYyBpdGVtVGl0bGU6IHN0cmluZztcblxuICAgIHB1YmxpYyBpdGVtczogRGlzcGxheUl0ZW1bXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sobnVsbCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJvbXB0ID0gdGhpcy5wYXJhbXMuY29udGV4dC5wcm9tcHRNc2c7XG4gICAgICAgIHRoaXMuaXRlbVRpdGxlID0gdGhpcy5wYXJhbXMuY29udGV4dC5pdGVtVGl0bGU7XG5cbiAgICAgICAgbGV0IHRoZUl0ZW1zOiBEaXNwbGF5SXRlbVtdID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgZW51bU1lbWJlciBpbiBJdGVtVHlwZUVudW0pIHtcbiAgICAgICAgICAgIGxldCBpbnRWYWwgPSBwYXJzZUludChlbnVtTWVtYmVyLCAxMCk7XG4gICAgICAgICAgICB2YXIgaXNWYWx1ZVByb3BlcnR5ID0gaW50VmFsID49IDA7XG4gICAgICAgICAgICBpZiAoaXNWYWx1ZVByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgdGhlSXRlbXMucHVzaCh7IHZhbHVlOiBlbnVtTWVtYmVyLCB0aXRsZTogSXRlbVR5cGVFbnVtW2VudW1NZW1iZXJdLCBpbWc6IEl0ZW1UeXBlRW51bS5nZXRJbWFnZShpbnRWYWwpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGVJdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdHlwZVNlbGVjdChhcmdzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhJdGVtVHlwZUVudW1bYXJnc10pO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIERpc3BsYXlJdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgaW1nOiBzdHJpbmc7XG59XG4iXX0=