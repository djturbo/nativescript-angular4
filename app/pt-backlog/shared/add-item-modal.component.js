"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//angular imports
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
//app imports
var static_data_1 = require("../../shared/static-data");
var AddItemModalComponent = (function () {
    function AddItemModalComponent(params, modalService, vcRef) {
        this.params = params;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.formFieldGridCols = '90, *, 90';
    }
    Object.defineProperty(AddItemModalComponent.prototype, "btnDoneEnabled", {
        get: function () {
            return this.newItem.title.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AddItemModalComponent.prototype.tapCancel = function () {
        this.params.closeCallback(null);
    };
    AddItemModalComponent.prototype.tapDone = function () {
        this.params.closeCallback(this.newItem);
    };
    AddItemModalComponent.prototype.ngOnInit = function () {
        this.prompt = this.params.context.promptMsg;
        this.newItem = {
            title: '',
            description: '',
            type: static_data_1.ItemTypeEnum.PBI
        };
    };
    AddItemModalComponent.prototype.textViewFieldHeight = function (value) {
        if (value) {
            var lineHeight = 20;
            var numlines = Math.ceil(value.length / 36);
            var newHeight = ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
            return newHeight < 150 ? newHeight : 150;
        }
        else {
            return 40;
        }
    };
    AddItemModalComponent.prototype.showTypeModal = function () {
        var _this = this;
        var options = {
            context: { itemTitle: this.newItem.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(item_type_picker_modal_component_1.ItemTypePickerModalComponent, options).then(function (res) {
            if (res) {
                _this.newItem.type = res;
            }
        });
    };
    AddItemModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-item-modal',
            templateUrl: 'add-item-modal.component.html',
            styleUrls: ['add-item-modal.component.css']
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], AddItemModalComponent);
    return AddItemModalComponent;
}());
exports.AddItemModalComponent = AddItemModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFvRTtBQUlwRSxtRUFBb0g7QUFFcEgsK0ZBQTBGO0FBRTFGLGFBQWE7QUFDYix3REFBd0Q7QUFZeEQ7SUFVSSwrQkFDWSxNQUF5QixFQUN6QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFWNUIsc0JBQWlCLEdBQUcsV0FBVyxDQUFDO0lBVUEsQ0FBQztJQVB4QyxzQkFBVyxpREFBYzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBT00seUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sdUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsSUFBSSxFQUFFLDBCQUFZLENBQUMsR0FBRztTQUN6QixDQUFDO0lBQ04sQ0FBQztJQUVNLG1EQUFtQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFTSw2Q0FBYSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDekUsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLCtEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF4RFEscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7eUNBWXNCLDJCQUFpQjtZQUNYLDRCQUFrQjtZQUN6Qix1QkFBZ0I7T0FiMUIscUJBQXFCLENBeURqQztJQUFELDRCQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ1BhcmFtcywgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSwgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnRcIjtcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElOZXdJdGVtID0gUFREb21haW4uSU5ld0l0ZW07XG5cbmltcG9ydCBJVXNlciA9IFBURG9tYWluLklVc2VyO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYWRkLWl0ZW0tbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydhZGQtaXRlbS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkSXRlbU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcHJvbXB0OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybUZpZWxkR3JpZENvbHMgPSAnOTAsICosIDkwJztcbiAgICBwdWJsaWMgbmV3SXRlbTogSU5ld0l0ZW07XG5cbiAgICBwdWJsaWMgZ2V0IGJ0bkRvbmVFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uZXdJdGVtLnRpdGxlLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgICBwdWJsaWMgdGFwQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKG51bGwpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXBEb25lKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMubmV3SXRlbSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJvbXB0ID0gdGhpcy5wYXJhbXMuY29udGV4dC5wcm9tcHRNc2c7XG4gICAgICAgIHRoaXMubmV3SXRlbSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIHR5cGU6IEl0ZW1UeXBlRW51bS5QQklcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dFZpZXdGaWVsZEhlaWdodCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbGluZUhlaWdodCA9IDIwO1xuICAgICAgICAgICAgbGV0IG51bWxpbmVzID0gTWF0aC5jZWlsKHZhbHVlLmxlbmd0aCAvIDM2KTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAoKG51bWxpbmVzIDwgMiA/IDIgOiBudW1saW5lcykgKiBsaW5lSGVpZ2h0KSArIDEwO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodCA8IDE1MCA/IG5ld0hlaWdodCA6IDE1MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VHlwZU1vZGFsKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7IGl0ZW1UaXRsZTogdGhpcy5uZXdJdGVtLnRpdGxlLCBwcm9tcHRNc2c6IFwiU2VsZWN0IGl0ZW0gdHlwZVwiIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXM6IEl0ZW1UeXBlRW51bSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3SXRlbS50eXBlID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19