"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var segmented_bar_1 = require("ui/segmented-bar");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../../services");
var PTItemComponent = (function () {
    function PTItemComponent(modalService, vcRef, backlogService) {
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.backlogService = backlogService;
        this._itemDetailScreens = [
            { title: 'Details', routePath: 'pt-item-details' },
            { title: 'Tasks', routePath: 'pt-item-tasks' },
            { title: 'Chitchat', routePath: 'pt-item-chitchat' }
        ];
        this.myNavItems = [];
        for (var i = 0; i < this._itemDetailScreens.length; i++) {
            var tmpSegmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backlogService.getItem('2').then(function (item) { return _this.item = item; });
    };
    PTItemComponent.prototype.selectedItemDetailScreenIndexChanged = function (segBar) {
        var newIndex = segBar.selectedIndex;
        console.log("newIndex: ", newIndex);
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
            services_1.BacklogService])
    ], PTItemComponent);
    return PTItemComponent;
}());
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxrREFBa0U7QUFDbEUsa0VBQTJGO0FBRTNGLDJDQUFnRDtBQWVoRDtJQVNJLHlCQUNZLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ3ZCLGNBQThCO1FBRjlCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUbEMsdUJBQWtCLEdBQUc7WUFDekIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtZQUNsRCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtZQUM5QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO1NBQ3ZELENBQUM7UUFDSyxlQUFVLEdBQTRCLEVBQUUsQ0FBQztRQU01QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN0RCxJQUFJLG1CQUFtQixHQUF1QyxJQUFJLGdDQUFnQixFQUFFLENBQUM7WUFDckYsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBRUwsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFHQztRQURHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLDhEQUFvQyxHQUEzQyxVQUE0QyxNQUFvQjtRQUM1RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUE5QlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FXNEIsaUNBQWtCO1lBQ3pCLHVCQUFnQjtZQUNQLHlCQUFjO09BWmpDLGVBQWUsQ0ErQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tICd1aS9zZWdtZW50ZWQtYmFyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG4gICAgcHJpdmF0ZSBfaXRlbURldGFpbFNjcmVlbnMgPSBbXG4gICAgICAgIHsgdGl0bGU6ICdEZXRhaWxzJywgcm91dGVQYXRoOiAncHQtaXRlbS1kZXRhaWxzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnVGFza3MnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLXRhc2tzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnQ2hpdGNoYXQnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLWNoaXRjaGF0JyB9XG4gICAgXTtcbiAgICBwdWJsaWMgbXlOYXZJdGVtczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtRGV0YWlsU2NyZWVucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRtcFNlZ21lbnRlZEJhckl0ZW06IFNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICAgICAgdG1wU2VnbWVudGVkQmFySXRlbS50aXRsZSA9IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zW2ldLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5teU5hdkl0ZW1zLnB1c2godG1wU2VnbWVudGVkQmFySXRlbSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbSgnMicpLnRoZW4oaXRlbSA9PiB0aGlzLml0ZW0gPSBpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXhDaGFuZ2VkKHNlZ0JhcjogU2VnbWVudGVkQmFyKSB7XG4gICAgICAgIGxldCBuZXdJbmRleCA9IHNlZ0Jhci5zZWxlY3RlZEluZGV4O1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld0luZGV4OiBcIiwgbmV3SW5kZXgpO1xuICAgIH1cbn1cbiJdfQ==