"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var static_data_1 = require("../../shared/static-data");
var PTItemComponent = (function () {
    function PTItemComponent() {
    }
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.item = ITEM;
        });
    };
    PTItemComponent = __decorate([
        core_1.Component({
            selector: 'pt-item',
            templateUrl: './pt-backlog/pt-item/pt-item.component.html',
            styleUrls: ['./pt-backlog/pt-item/pt-item.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PTItemComponent);
    return PTItemComponent;
}());
exports.PTItemComponent = PTItemComponent;
var ITEM = { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx3REFBa0Y7QUFTbEY7SUFFSTtJQUFnQixDQUFDO0lBRWpCLGtDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVJRLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw2Q0FBNkM7WUFDMUQsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7U0FDN0QsQ0FBQzs7T0FDVyxlQUFlLENBUzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSwwQ0FBZTtBQVc1QixJQUFNLElBQUksR0FDTixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSx3QkFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSwwQkFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgU3RhdHVzRW51bSwgUHJpb3JpdHlFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3B0LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wdC1iYWNrbG9nL3B0LWl0ZW0vcHQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHQtYmFja2xvZy9wdC1pdGVtL3B0LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBJVEVNO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IElURU06IElQVEl0ZW0gPVxuICAgIHsgaWQ6ICcxJywgdGl0bGU6ICdpdGVtIDEnLCBkZXNjcmlwdGlvbjogJ2l0ZW0gMSBkZXNjJywgZXN0aW1hdGU6IDUsIHByaW9yaXR5OiBQcmlvcml0eUVudW0uTG93LCBzdGF0dXM6IFN0YXR1c0VudW0uT3BlbiwgdGFza3M6IFtdLCB0eXBlOiBJdGVtVHlwZUVudW0uQnVnLCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSwgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpLCBjb21tZW50czogW10sIGFzc2lnbmVlOiBudWxsIH07Il19