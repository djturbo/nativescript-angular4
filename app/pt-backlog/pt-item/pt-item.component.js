"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var backlog_service_1 = require("../../services/backlog.service");
var static_data_1 = require("../../shared/static-data");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemComponent = (function () {
    function PTItemComponent(modalService, vcRef, backlogService) {
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.backlogService = backlogService;
    }
    PTItemComponent.prototype.ngOnInit = function () {
        //setTimeout(() => {
        this.item = ITEM;
        //}, 2000);
    };
    PTItemComponent.prototype.showTypeModal = function () {
        var _this = this;
        var options = {
            context: { itemTitle: this.item.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(item_type_picker_modal_component_1.ItemTypePickerModalComponent, options).then(function (res) {
            if (res) {
                console.log(res);
                _this.item.type = res;
            }
        });
    };
    PTItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-item',
            templateUrl: 'pt-item.component.html',
            styleUrls: ['pt-item.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            backlog_service_1.BacklogService])
    ], PTItemComponent);
    return PTItemComponent;
}());
exports.PTItemComponent = PTItemComponent;
var ITEM = { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUVwRSxrRUFBMkY7QUFFM0Ysa0VBQWdFO0FBRWhFLHdEQUFrRjtBQUlsRiwrRkFBMEY7QUFTMUY7SUFJSSx5QkFDWSxZQUFnQyxFQUNoQyxLQUF1QixFQUN2QixjQUE4QjtRQUY5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3RDLENBQUM7SUFFTCxrQ0FBUSxHQUFSO1FBQ0ksb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQVc7SUFDZixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFBQSxpQkFhQztRQVpHLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO1lBQ3RFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQywrREFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN0RixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUN6QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0JRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBTTRCLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDUCxnQ0FBYztPQVBqQyxlQUFlLENBOEIzQjtJQUFELHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksMENBQWU7QUFnQzVCLElBQU0sSUFBSSxHQUNOLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsMEJBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLHdCQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbSA9IElURU07XG4gICAgICAgIC8vfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUeXBlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXRlbVRpdGxlOiB0aGlzLml0ZW0udGl0bGUsIHByb21wdE1zZzogXCJTZWxlY3QgaXRlbSB0eXBlXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSXRlbVR5cGVFbnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0udHlwZSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBJVEVNOiBJUFRJdGVtID1cbiAgICB7IGlkOiAnMScsIHRpdGxlOiAnaXRlbSAxJywgZGVzY3JpcHRpb246ICdpdGVtIDEgZGVzYycsIGVzdGltYXRlOiA1LCBwcmlvcml0eTogUHJpb3JpdHlFbnVtLkxvdywgc3RhdHVzOiBTdGF0dXNFbnVtLk9wZW4sIHRhc2tzOiBbXSwgdHlwZTogSXRlbVR5cGVFbnVtLkJ1ZywgZGF0ZUNyZWF0ZWQ6IG5ldyBEYXRlKCksIGRhdGVNb2RpZmllZDogbmV3IERhdGUoKSwgY29tbWVudHM6IFtdLCBhc3NpZ25lZTogbnVsbCB9OyJdfQ==