"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemTypeEnum;
(function (ItemTypeEnum) {
    ItemTypeEnum[ItemTypeEnum["PBI"] = 1] = "PBI";
    ItemTypeEnum[ItemTypeEnum["Bug"] = 2] = "Bug";
    ItemTypeEnum[ItemTypeEnum["Chore"] = 3] = "Chore";
    ItemTypeEnum[ItemTypeEnum["Impediment"] = 4] = "Impediment";
})(ItemTypeEnum = exports.ItemTypeEnum || (exports.ItemTypeEnum = {}));
(function (ItemTypeEnum) {
    function getIndicatorClass(type) {
        switch (type) {
            case ItemTypeEnum.PBI:
                return 'indicator-pbi';
            case ItemTypeEnum.Bug:
                return 'indicator-bug';
            case ItemTypeEnum.Chore:
                return 'indicator-chore';
            case ItemTypeEnum.Impediment:
                return 'indicator-impediment';
            default:
                return '';
        }
    }
    ItemTypeEnum.getIndicatorClass = getIndicatorClass;
    function getImage(type) {
        switch (type) {
            case ItemTypeEnum.PBI:
                return '~/images/i-pbi.png';
            case ItemTypeEnum.Bug:
                return '~/images/i-bug.png';
            case ItemTypeEnum.Chore:
                return '~/images/i-chore.png';
            case ItemTypeEnum.Impediment:
                return '~/images/i-impediment.png';
            default:
                return '';
        }
    }
    ItemTypeEnum.getImage = getImage;
})(ItemTypeEnum = exports.ItemTypeEnum || (exports.ItemTypeEnum = {}));
var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum[PriorityEnum["Low"] = 1] = "Low";
    PriorityEnum[PriorityEnum["Medium"] = 2] = "Medium";
    PriorityEnum[PriorityEnum["High"] = 3] = "High";
    PriorityEnum[PriorityEnum["Critical"] = 4] = "Critical";
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
(function (PriorityEnum) {
    function isMax(priority) {
        return priority === PriorityEnum.Critical;
    }
    PriorityEnum.isMax = isMax;
    function isMin(priority) {
        return priority === PriorityEnum.Low;
    }
    PriorityEnum.isMin = isMin;
    function nextPriority(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return undefined;
            case PriorityEnum.High:
                return PriorityEnum.Critical;
            case PriorityEnum.Medium:
                return PriorityEnum.High;
            case PriorityEnum.Low:
                return PriorityEnum.Medium;
        }
    }
    PriorityEnum.nextPriority = nextPriority;
    function previousPriority(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return PriorityEnum.High;
            case PriorityEnum.High:
                return PriorityEnum.Medium;
            case PriorityEnum.Medium:
                return PriorityEnum.Low;
            case PriorityEnum.Low:
                return undefined;
        }
    }
    PriorityEnum.previousPriority = previousPriority;
    function getIndicatorClass(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return 'indicator-priority critical';
            case PriorityEnum.High:
                return 'indicator-priority high';
            case PriorityEnum.Medium:
                return 'indicator-priority medium';
            case PriorityEnum.Low:
                return 'indicator-priority low';
            default:
                return '';
        }
    }
    PriorityEnum.getIndicatorClass = getIndicatorClass;
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Submitted"] = 1] = "Submitted";
    StatusEnum[StatusEnum["Open"] = 2] = "Open";
    StatusEnum[StatusEnum["Closed"] = 3] = "Closed";
    StatusEnum[StatusEnum["ReOpened"] = 4] = "ReOpened";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUNwQiw2Q0FBTyxDQUFBO0lBQ1AsNkNBQU8sQ0FBQTtJQUNQLGlEQUFTLENBQUE7SUFDVCwyREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQUNELFdBQWlCLFlBQVk7SUFDekIsMkJBQWtDLElBQWtCO1FBQ2hELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixNQUFNLENBQUMsZUFBZSxDQUFDO1lBQzNCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsS0FBSyxZQUFZLENBQUMsS0FBSztnQkFDbkIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQzdCLEtBQUssWUFBWSxDQUFDLFVBQVU7Z0JBQ3hCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztZQUNsQztnQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBYmUsOEJBQWlCLG9CQWFoQyxDQUFBO0lBQ0Qsa0JBQXlCLElBQWtCO1FBQ3ZDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDaEMsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQ2hDLEtBQUssWUFBWSxDQUFDLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztZQUNsQyxLQUFLLFlBQVksQ0FBQyxVQUFVO2dCQUN4QixNQUFNLENBQUMsMkJBQTJCLENBQUM7WUFDdkM7Z0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQWJlLHFCQUFRLFdBYXZCLENBQUE7QUFDTCxDQUFDLEVBN0JnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQTZCNUI7QUFFRCxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsNkNBQU8sQ0FBQTtJQUNQLG1EQUFVLENBQUE7SUFDViwrQ0FBUSxDQUFBO0lBQ1IsdURBQVksQ0FBQTtBQUNoQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFDRCxXQUFpQixZQUFZO0lBQ3pCLGVBQXNCLFFBQXNCO1FBQ3hDLE1BQU0sQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBRmUsa0JBQUssUUFFcEIsQ0FBQTtJQUNELGVBQXNCLFFBQXNCO1FBQ3hDLE1BQU0sQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDO0lBRmUsa0JBQUssUUFFcEIsQ0FBQTtJQUNELHNCQUE2QixRQUFzQjtRQUMvQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxZQUFZLENBQUMsUUFBUTtnQkFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQixLQUFLLFlBQVksQ0FBQyxJQUFJO2dCQUNsQixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxLQUFLLFlBQVksQ0FBQyxNQUFNO2dCQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQVhlLHlCQUFZLGVBVzNCLENBQUE7SUFDRCwwQkFBaUMsUUFBc0I7UUFDbkQsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssWUFBWSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQy9CLEtBQUssWUFBWSxDQUFDLE1BQU07Z0JBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQzVCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFYZSw2QkFBZ0IsbUJBVy9CLENBQUE7SUFDRCwyQkFBa0MsUUFBc0I7UUFDcEQsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQ3RCLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztZQUN6QyxLQUFLLFlBQVksQ0FBQyxJQUFJO2dCQUNsQixNQUFNLENBQUMseUJBQXlCLENBQUM7WUFDckMsS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDcEIsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1lBQ3ZDLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztZQUNwQztnQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBYmUsOEJBQWlCLG9CQWFoQyxDQUFBO0FBQ0wsQ0FBQyxFQTdDZ0IsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUE2QzVCO0FBRUQsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ2xCLHFEQUFhLENBQUE7SUFDYiwyQ0FBUSxDQUFBO0lBQ1IsK0NBQVUsQ0FBQTtJQUNWLG1EQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSXRlbVR5cGVFbnVtIHtcbiAgICBQQkkgPSAxLFxuICAgIEJ1ZyA9IDIsXG4gICAgQ2hvcmUgPSAzLFxuICAgIEltcGVkaW1lbnQgPSA0XG59XG5leHBvcnQgbmFtZXNwYWNlIEl0ZW1UeXBlRW51bSB7XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldEluZGljYXRvckNsYXNzKHR5cGU6IEl0ZW1UeXBlRW51bSk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uUEJJOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXBiaSc7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5CdWc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItYnVnJztcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLkNob3JlOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLWNob3JlJztcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLkltcGVkaW1lbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItaW1wZWRpbWVudCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2UodHlwZTogSXRlbVR5cGVFbnVtKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEl0ZW1UeXBlRW51bS5QQkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd+L2ltYWdlcy9pLXBiaS5wbmcnO1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uQnVnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnfi9pbWFnZXMvaS1idWcucG5nJztcbiAgICAgICAgICAgIGNhc2UgSXRlbVR5cGVFbnVtLkNob3JlOlxuICAgICAgICAgICAgICAgIHJldHVybiAnfi9pbWFnZXMvaS1jaG9yZS5wbmcnO1xuICAgICAgICAgICAgY2FzZSBJdGVtVHlwZUVudW0uSW1wZWRpbWVudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ34vaW1hZ2VzL2ktaW1wZWRpbWVudC5wbmcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFByaW9yaXR5RW51bSB7XG4gICAgTG93ID0gMSxcbiAgICBNZWRpdW0gPSAyLFxuICAgIEhpZ2ggPSAzLFxuICAgIENyaXRpY2FsID0gNFxufVxuZXhwb3J0IG5hbWVzcGFjZSBQcmlvcml0eUVudW0ge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBpc01heChwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwcmlvcml0eSA9PT0gUHJpb3JpdHlFbnVtLkNyaXRpY2FsO1xuICAgIH1cbiAgICBleHBvcnQgZnVuY3Rpb24gaXNNaW4ocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHkgPT09IFByaW9yaXR5RW51bS5Mb3c7XG4gICAgfVxuICAgIGV4cG9ydCBmdW5jdGlvbiBuZXh0UHJpb3JpdHkocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IFByaW9yaXR5RW51bSB7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkNyaXRpY2FsOlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5IaWdoOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uQ3JpdGljYWw7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5NZWRpdW06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5IaWdoO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uTG93OlxuICAgICAgICAgICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uTWVkaXVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBmdW5jdGlvbiBwcmV2aW91c1ByaW9yaXR5KHByaW9yaXR5OiBQcmlvcml0eUVudW0pOiBQcmlvcml0eUVudW0ge1xuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5Dcml0aWNhbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLkhpZ2g7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5IaWdoOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uTWVkaXVtO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uTWVkaXVtOlxuICAgICAgICAgICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uTG93O1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uTG93OlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldEluZGljYXRvckNsYXNzKHByaW9yaXR5OiBQcmlvcml0eUVudW0pOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5Dcml0aWNhbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wcmlvcml0eSBjcml0aWNhbCc7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5IaWdoOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXByaW9yaXR5IGhpZ2gnO1xuICAgICAgICAgICAgY2FzZSBQcmlvcml0eUVudW0uTWVkaXVtOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXByaW9yaXR5IG1lZGl1bSc7XG4gICAgICAgICAgICBjYXNlIFByaW9yaXR5RW51bS5Mb3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItcHJpb3JpdHkgbG93JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBTdGF0dXNFbnVtIHtcbiAgICBTdWJtaXR0ZWQgPSAxLFxuICAgIE9wZW4gPSAyLFxuICAgIENsb3NlZCA9IDMsXG4gICAgUmVPcGVuZWQgPSA0XG59XG4iXX0=