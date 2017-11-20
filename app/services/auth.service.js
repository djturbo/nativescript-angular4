"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var constants_1 = require("../shared/constants");
var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.login = function (username, password) {
        return Rx_1.Observable.create(function (observer) {
            //simulate logging in
            if (password === constants_1.DEMO_PASSWORD) {
                setTimeout(function () {
                    var fakeUser = { id: '1', fullName: 'Alex Ziskind', avatar: '' };
                    observer.next(fakeUser);
                }, 3000);
            }
            else {
                setTimeout(function () {
                    observer.next(null);
                }, 3000);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        console.log('logging out');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDhCQUErQztBQUUvQyxpREFBb0Q7QUFLcEQ7SUFDSTtJQUFnQixDQUFDO0lBRVYscUNBQUssR0FBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFDM0MsTUFBTSxDQUFDLGVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUF5QjtZQUMvQyxxQkFBcUI7WUFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLHlCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixVQUFVLENBQUM7b0JBQ1AsSUFBSSxRQUFRLEdBQVUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO29CQUN4RSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osVUFBVSxDQUFDO29CQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBckJRLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFOztPQUNBLHFCQUFxQixDQXNCakM7SUFBRCw0QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IERFTU9fUEFTU1dPUkQgfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElVc2VyID0gUFREb21haW4uSVVzZXI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVXNlcj4pID0+IHtcbiAgICAgICAgICAgIC8vc2ltdWxhdGUgbG9nZ2luZyBpblxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09PSBERU1PX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWtlVXNlcjogSVVzZXIgPSB7IGlkOiAnMScsIGZ1bGxOYW1lOiAnQWxleCBaaXNraW5kJywgYXZhdGFyOiAnJyB9O1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZha2VVc2VyKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIG91dCcpO1xuICAgIH1cbn0iXX0=