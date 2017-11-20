"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var services_1 = require("../services");
var color_1 = require("tns-core-modules/color/color");
var enums = require("ui/enums");
var LoginComponent = (function () {
    function LoginComponent(page, authService) {
        this.page = page;
        this.authService = authService;
        this.isLoading = false;
        this.loginModel = { username: 'alexziskind', password: 'fake-password' };
    }
    Object.defineProperty(LoginComponent.prototype, "loginInputs", {
        get: function () {
            return this.loginInputsRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "btnLogin", {
        get: function () {
            return this.btnLoginRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "btnLoginWrapper", {
        get: function () {
            return this.btnLoginWrapperRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.loginInputs.className = '';
        this.loginAnimationForward();
        this.authService.login(this.loginModel.username, this.loginModel.password)
            .subscribe(function (data) {
            if (data === null) {
                console.log('login failed');
                _this.loginAnimationReverse().then(function () {
                    _this.loginInputs.className = 'login-failed';
                });
            }
            else {
                console.log('login successful');
            }
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.loginAnimationForward = function () {
        var _this = this;
        this.btnLogin.opacity = 0;
        this.btnLoginWrapper.animate({
            scale: { x: 0.5, y: 0.5 },
            duration: 200,
            curve: enums.AnimationCurve.cubicBezier(0, .75, .22, 1)
        }).then(function () {
            _this.btnLoginWrapper.animate({
                scale: { x: 20, y: 20 },
                duration: 250,
                curve: enums.AnimationCurve.cubicBezier(.93, .02, 1, .25)
            })
                .then(function () {
                _this.btnLoginWrapper.animate({
                    backgroundColor: new color_1.Color('#999999'),
                    duration: 5000,
                    delay: 500
                });
            });
        });
    };
    LoginComponent.prototype.loginAnimationReverse = function () {
        var _this = this;
        return this.btnLoginWrapper.animate({
            scale: { x: 1, y: 1 },
            backgroundColor: new color_1.Color('#555a97'),
            duration: 200,
            curve: enums.AnimationCurve.cubicBezier(0, .75, .22, 1)
        }).then(function () {
            _this.btnLogin.opacity = 1;
        });
    };
    __decorate([
        core_1.ViewChild('loginInputs'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "loginInputsRef", void 0);
    __decorate([
        core_1.ViewChild('btnLogin'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "btnLoginRef", void 0);
    __decorate([
        core_1.ViewChild('btnLoginWrapper'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "btnLoginWrapperRef", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'pt-login.component.html',
            selector: 'pt-login',
            styleUrls: ['pt-login.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            services_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdDQUErQjtBQUcvQix3Q0FBb0Q7QUFJcEQsc0RBQXFEO0FBQ3JELGdDQUFrQztBQVFsQztJQXFCSSx3QkFDWSxJQUFVLEVBQ1YsV0FBa0M7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQXRCdkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWtCM0IsZUFBVSxHQUFnQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBS3BGLENBQUM7SUFqQkwsc0JBQVcsdUNBQVc7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvQ0FBUTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJDQUFlO2FBQTFCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFTRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVoQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMs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LE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0F1Qm9CLFdBQUk7WUFDRyxnQ0FBcUI7T0F2QnJDLGNBQWMsQ0FzRjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztBQXRGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBERU1PX1BBU1NXT1JEIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJTG9naW5Nb2RlbCA9IFBURG9tYWluLklMb2dpbk1vZGVsO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yJztcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzZWxlY3RvcjogJ3B0LWxvZ2luJyxcbiAgICBzdHlsZVVybHM6IFsncHQtbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZCgnbG9naW5JbnB1dHMnKSBsb2dpbklucHV0c1JlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdidG5Mb2dpbicpIGJ0bkxvZ2luUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2J0bkxvZ2luV3JhcHBlcicpIGJ0bkxvZ2luV3JhcHBlclJlZjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBnZXQgbG9naW5JbnB1dHMoKTogVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luSW5wdXRzUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBidG5Mb2dpbigpOiBWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnRuTG9naW5SZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ0bkxvZ2luV3JhcHBlcigpOiBWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnRuTG9naW5XcmFwcGVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luTW9kZWw6IElMb2dpbk1vZGVsID0geyB1c2VybmFtZTogJ2FsZXh6aXNraW5kJywgcGFzc3dvcmQ6ICdmYWtlLXBhc3N3b3JkJyB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpbklucHV0cy5jbGFzc05hbWUgPSAnJztcblxuICAgICAgICB0aGlzLmxvZ2luQW5pbWF0aW9uRm9yd2FyZCgpO1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy5sb2dpbk1vZGVsLnVzZXJuYW1lLCB0aGlzLmxvZ2luTW9kZWwucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBmYWlsZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQW5pbWF0aW9uUmV2ZXJzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbklucHV0cy5jbGFzc05hbWUgPSAnbG9naW4tZmFpbGVkJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzc2Z1bCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25Gb3J3YXJkKCkge1xuICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmJ0bkxvZ2luV3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDAuNSwgeTogMC41IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAsIC43NSwgLjIyLCAxKVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnRuTG9naW5XcmFwcGVyLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjYWxlOiB7IHg6IDIwLCB5OiAyMCB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC45MywgLjAyLCAxLCAuMjUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignIzk5OTk5OScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogNTAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25SZXZlcnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignIzU1NWE5NycpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLCAuNzUsIC4yMiwgMSlcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19