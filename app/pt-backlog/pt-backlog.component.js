"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../services");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var PTBacklogComponent = (function () {
    function PTBacklogComponent(page, _changeDetectionRef, backlogService, modalService, vcRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.page.on("loaded", this.onLoaded, this);
        this.selectedViewIndex = 1;
    }
    PTBacklogComponent.prototype.onLoaded = function () {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    };
    PTBacklogComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(PTBacklogComponent.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        set: function (value) {
            this._currentLocation = value;
        },
        enumerable: true,
        configurable: true
    });
    PTBacklogComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer";
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Right;
    };
    Object.defineProperty(PTBacklogComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    PTBacklogComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    PTBacklogComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    PTBacklogComponent.prototype.showSlideout = function () {
        this.drawer.showDrawer();
    };
    PTBacklogComponent.prototype.logoutTap = function () {
        alert('LOGOUT');
    };
    PTBacklogComponent.prototype.selectFilteredView = function (index, title) {
        this.selectedViewIndex = index;
        this._mainContentText = title;
    };
    PTBacklogComponent.prototype.showAddItemModal = function () {
        var options = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(add_item_modal_component_1.AddItemModalComponent, options).then(function (newItem) {
            if (newItem != null) {
                //this.backlogService.addNewPTItem(newItem, null);
            }
        });
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], PTBacklogComponent.prototype, "drawerComponent", void 0);
    PTBacklogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-backlog',
            templateUrl: 'pt-backlog.component.html',
            styleUrls: ['pt-backlog.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            core_1.ChangeDetectorRef,
            services_1.BacklogService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], PTBacklogComponent);
    return PTBacklogComponent;
}());
exports.PTBacklogComponent = PTBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpSDtBQUNqSCxnQ0FBK0I7QUFFL0Isa0VBQWdHO0FBQ2hHLDZEQUFtRjtBQUVuRixrRUFBMkY7QUFFM0Ysd0NBQTZDO0FBQzdDLDhFQUEwRTtBQVcxRTtJQU1JLDRCQUNZLElBQVUsRUFDVixtQkFBc0MsRUFDdEMsY0FBOEIsRUFDOUIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFKdkIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTSxxQ0FBUSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0lBS0QsNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCxzQkFBSSwrQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQW9CLEtBQXlCO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUVELHNCQUFJLCtDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBTU0sdUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSw2Q0FBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHNDQUFTLEdBQWhCO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsS0FBYSxFQUFFLEtBQWE7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSw2Q0FBZ0IsR0FBdkI7UUFDSSxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtZQUNsQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsZ0RBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBaUI7WUFDL0UsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLGtEQUFrRDtZQUN0RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNURrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7K0RBQUM7SUFyQnpFLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzt5Q0FRb0IsV0FBSTtZQUNXLHdCQUFpQjtZQUN0Qix5QkFBYztZQUNoQixpQ0FBa0I7WUFDekIsdUJBQWdCO09BWDFCLGtCQUFrQixDQW1GOUI7SUFBRCx5QkFBQztDQUFBLEFBbkZELElBbUZDO0FBbkZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciwgU2lkZURyYXdlckxvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IEFkZEl0ZW1Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9hZGQtaXRlbS1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElOZXdJdGVtID0gUFREb21haW4uSU5ld0l0ZW07XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtYmFja2xvZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWJhY2tsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgX2N1cnJlbnRMb2NhdGlvbjogU2lkZURyYXdlckxvY2F0aW9uO1xuICAgIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xuXG4gICAgcHVibGljIHNlbGVjdGVkVmlld0luZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLnBhZ2Uub24oXCJsb2FkZWRcIiwgdGhpcy5vbkxvYWRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSAxO1xuICAgIH1cbiAgICBwdWJsaWMgb25Mb2FkZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdlci5hbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5hbmRyb2lkLnNldERyYXdlckNsb3NlVGhyZXNob2xkKDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICBnZXQgY3VycmVudExvY2F0aW9uKCk6IFNpZGVEcmF3ZXJMb2NhdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TG9jYXRpb247XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRMb2NhdGlvbih2YWx1ZTogU2lkZURyYXdlckxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMb2NhdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50VGV4dCA9IFwiU2lkZURyYXdlclwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcbiAgICB9XG5cbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuICAgIH1cblxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2xpZGVvdXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0VGFwKCkge1xuICAgICAgICBhbGVydCgnTE9HT1VUJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEZpbHRlcmVkVmlldyhpbmRleDogbnVtYmVyLCB0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93QWRkSXRlbU1vZGFsKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7IHByb21wdE1zZzogXCJBZGQgaXRlbVwiIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRJdGVtTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKG5ld0l0ZW06IElOZXdJdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV3SXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmJhY2tsb2dTZXJ2aWNlLmFkZE5ld1BUSXRlbShuZXdJdGVtLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19