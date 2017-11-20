"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../../services");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemDetailsComponent = (function () {
    function PTItemDetailsComponent(modalService, vcRef, backlogService) {
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.backlogService = backlogService;
        this.formFieldGridCols = '90, *, 90';
    }
    PTItemDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        console.log("PTItemDetailsComponent onInit");
        this.backlogService.getItem('2').then(function (item) {
            debugger;
            console.log("PTItemDetailsComponent item: ", item);
            _this.item = item;
        }, function (err) {
            console.log("pt-item-details.component.ts error: ", err);
        });
    };
    PTItemDetailsComponent.prototype.showTypeModal = function () {
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
    PTItemDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-item-details',
            templateUrl: 'pt-item-details.component.html',
            styleUrls: [' pt-item-details.component.scss']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            services_1.BacklogService])
    ], PTItemDetailsComponent);
    return PTItemDetailsComponent;
}());
exports.PTItemDetailsComponent = PTItemDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsa0VBQTJGO0FBRTNGLDJDQUFnRDtBQU1oRCwrRkFBMEY7QUFPMUY7SUFHSSxnQ0FDWSxZQUFnQyxFQUNoQyxLQUF1QixFQUN2QixjQUE4QjtRQUY5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSm5DLHNCQUFpQixHQUFHLFdBQVcsQ0FBQztJQUtuQyxDQUFDO0lBRUUseUNBQVEsR0FBZjtRQUFBLGlCQVlDO1FBWEcsUUFBUSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDakMsVUFBQSxJQUFJO1lBQ0EsUUFBUSxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSw4Q0FBYSxHQUFwQjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDdEUsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLCtEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQ1Esc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7eUNBSzRCLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDUCx5QkFBYztPQU5qQyxzQkFBc0IsQ0FxQ2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcblxuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnIHB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbURldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuICAgIHB1YmxpYyBmb3JtRmllbGRHcmlkQ29scyA9ICc5MCwgKiwgOTAnO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBUSXRlbURldGFpbHNDb21wb25lbnQgb25Jbml0XCIpO1xuICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLmdldEl0ZW0oJzInKS50aGVuKFxuICAgICAgICAgICAgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IGl0ZW06IFwiLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdC1pdGVtLWRldGFpbHMuY29tcG9uZW50LnRzIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VHlwZU1vZGFsKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7IGl0ZW1UaXRsZTogdGhpcy5pdGVtLnRpdGxlLCBwcm9tcHRNc2c6IFwiU2VsZWN0IGl0ZW0gdHlwZVwiIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXM6IEl0ZW1UeXBlRW51bSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLnR5cGUgPSByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=