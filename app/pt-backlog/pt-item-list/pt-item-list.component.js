"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/* Import services */
var services_1 = require("../../services");
var static_data_1 = require("../../shared/static-data");
var PTItemListComponent = (function () {
    function PTItemListComponent(backlogService) {
        this.backlogService = backlogService;
    }
    PTItemListComponent.prototype.ngOnInit = function () {
        this.ptItems = this.backlogService.allItems;
    };
    PTItemListComponent.prototype.getIndicatorClass = function (item) {
        return static_data_1.ItemTypeEnum.getIndicatorClass(item.type);
    };
    /* Events  */
    PTItemListComponent.prototype.onLoaded = function (event) {
        console.log('onLoaded event: ', event);
    };
    PTItemListComponent.prototype.onItemLoading = function (event) {
        console.log("onItemLoading ", event);
    };
    PTItemListComponent.prototype.onItemTap = function (event) {
        console.log('onItemTap ', event);
        var lv = event.object;
        console.log('onItemTap lv: ', lv);
        var item = lv.items[event.index];
        alert(item.title);
    };
    PTItemListComponent = __decorate([
        core_1.Component({
            selector: 'pt-item-list',
            templateUrl: './pt-backlog/pt-item-list/pt-item-list.component.html',
            styleUrls: ['./pt-backlog/pt-item-list/pt-item-list.component.scss']
        }),
        __metadata("design:paramtypes", [services_1.BacklogService])
    ], PTItemListComponent);
    return PTItemListComponent;
}());
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLDJDQUFnRDtBQUVoRCx3REFBa0Y7QUFVbEY7SUFHSSw2QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUV2RCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNoRCxDQUFDO0lBRU0sK0NBQWlCLEdBQXhCLFVBQXlCLElBQWE7UUFDbEMsTUFBTSxDQUFDLDBCQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxhQUFhO0lBQ2Isc0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELHVDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQTVCUSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx1REFBdUQ7WUFDcEUsU0FBUyxFQUFFLENBQUMsdURBQXVELENBQUM7U0FDdkUsQ0FBQzt5Q0FJc0MseUJBQWM7T0FIekMsbUJBQW1CLENBNkIvQjtJQUFELDBCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qIEltcG9ydCBzZXJ2aWNlcyAqL1xuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgU3RhdHVzRW51bSwgUHJpb3JpdHlFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHQtaXRlbS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHQtYmFja2xvZy9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wdC1iYWNrbG9nL3B0LWl0ZW0tbGlzdC9wdC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcHRJdGVtczogSVBUSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHRJdGVtcyA9IHRoaXMuYmFja2xvZ1NlcnZpY2UuYWxsSXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEluZGljYXRvckNsYXNzKGl0ZW06IElQVEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIEl0ZW1UeXBlRW51bS5nZXRJbmRpY2F0b3JDbGFzcyhpdGVtLnR5cGUpO1xuICAgIH1cblxuICAgIC8qIEV2ZW50cyAgKi9cbiAgICBvbkxvYWRlZChldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Mb2FkZWQgZXZlbnQ6ICcsIGV2ZW50KTtcbiAgICB9XG4gICAgb25JdGVtTG9hZGluZyhldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uSXRlbUxvYWRpbmcgXCIsIGV2ZW50KTtcbiAgICB9XG4gICAgb25JdGVtVGFwKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkl0ZW1UYXAgJywgZXZlbnQpO1xuXG4gICAgICAgIGxldCBsdiA9IGV2ZW50Lm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coJ29uSXRlbVRhcCBsdjogJywgbHYpO1xuXG4gICAgICAgIGxldCBpdGVtID0gbHYuaXRlbXNbZXZlbnQuaW5kZXhdO1xuICAgICAgICBhbGVydChpdGVtLnRpdGxlKTtcbiAgICB9XG59XG4iXX0=