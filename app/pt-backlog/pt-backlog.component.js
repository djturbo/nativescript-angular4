"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var PTBacklogComponent = (function () {
    function PTBacklogComponent() {
    }
    PTBacklogComponent.prototype.ngOnInit = function () { };
    PTBacklogComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
    };
    PTBacklogComponent.prototype.showSlideout = function () {
        this._drawer.showDrawer();
    };
    PTBacklogComponent.prototype.logoutTap = function () {
        alert('LOGOUT');
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], PTBacklogComponent.prototype, "drawerComponent", void 0);
    PTBacklogComponent = __decorate([
        core_1.Component({
            selector: 'pt-backlog',
            templateUrl: './pt-backlog/pt-backlog.component.html',
            styleUrls: ['./pt-backlog/pt-backlog.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PTBacklogComponent);
    return PTBacklogComponent;
}());
exports.PTBacklogComponent = PTBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUU1RSxrRUFBZ0c7QUFDaEcsNkRBQW1GO0FBT25GO0lBS0k7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDRDQUFlLEdBQWY7UUFDSSw2R0FBNkc7UUFDN0csOENBQThDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsK0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFTSx5Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLHNDQUFTLEdBQWhCO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFuQmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsrREFBQztJQUh6RSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7U0FDeEQsQ0FBQzs7T0FDVyxrQkFBa0IsQ0F1QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyLCBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wdC1iYWNrbG9nL3B0LWJhY2tsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3B0LWJhY2tsb2cvcHQtYmFja2xvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBUQmFja2xvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBwcml2YXRlIF9kcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvL0NhbGxlZCBhZnRlciBuZ0FmdGVyQ29udGVudEluaXQgd2hlbiB0aGUgY29tcG9uZW50J3MgdmlldyBoYXMgYmVlbiBpbml0aWFsaXplZC4gQXBwbGllcyB0byBjb21wb25lbnRzIG9ubHkuXG4gICAgICAgIC8vQWRkICdpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQnIHRvIHRoZSBjbGFzcy5cbiAgICAgICAgdGhpcy5fZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fZHJhd2VyLmRyYXdlckxvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLlJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2xpZGVvdXQoKSB7XG4gICAgICAgIHRoaXMuX2RyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dFRhcCgpIHtcbiAgICAgICAgYWxlcnQoJ0xPR09VVCcpO1xuICAgIH1cbn0iXX0=