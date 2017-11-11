"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("application");
var platform = require("platform");
var utils = require("utils/utils");
function setStatusBarColors() {
    if (platform.isIOS) {
        application_1.on(application_1.launchEvent, function (args) {
            if (args.ios) {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle =
                    UIStatusBarStyle.LightContent;
            }
            else if (args.android && platform.device.sdkVersion >= '21') {
                application_1.android.on(application_1.AndroidApplication.activityCreatedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
                });
                application_1.android.on(application_1.AndroidApplication.activityDestroyedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });
                application_1.android.on(application_1.AndroidApplication.activityStartedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                    // For Android applications, args.android is an android activity class.
                    console.log("Activity: " + args.eventName);
                    var View = application_1.android.context.view.View;
                    var window = application_1.android.startActivity.getWindow();
                    window.setStatusBarColor(0x000000);
                    var decorView = window.getDecorView();
                    decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
                });
                application_1.android.on(application_1.AndroidApplication.activityPausedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });
                application_1.android.on(application_1.AndroidApplication.activityResumedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });
                application_1.android.on(application_1.AndroidApplication.activityStoppedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });
                application_1.android.on(application_1.AndroidApplication.saveActivityStateEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
                });
                application_1.android.on(application_1.AndroidApplication.activityResultEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity +
                        ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
                });
                application_1.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (args) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                    // Set args.cancel = true to cancel back navigation and do something custom.
                });
            }
        });
        application_1.on(application_1.suspendEvent, function (args) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            }
            else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });
        application_1.on(application_1.resumeEvent, function (args) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            }
            else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });
        application_1.on(application_1.exitEvent, function (args) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            }
            else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });
        application_1.on(application_1.lowMemoryEvent, function (args) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            }
            else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });
        application_1.on(application_1.uncaughtErrorEvent, function (args) {
            if (args.android) {
                // For Android applications, args.android is an NativeScriptError.
                console.log("NativeScriptError: " + args.android);
            }
            else if (args.ios) {
                // For iOS applications, args.ios is NativeScriptError.
                console.log("NativeScriptError: " + args.ios);
            }
        });
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLWJhci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBZ0JxQjtBQUdyQixtQ0FBcUM7QUFDckMsbUNBQXFDO0FBS3JDO0lBRUksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakIsZ0JBQWEsQ0FBQyx5QkFBVyxFQUFFLFVBQUMsSUFBMEI7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGNBQWM7b0JBQzNFLGdCQUFnQixDQUFDLFlBQVksQ0FBQztZQUN0QyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDNUQscUJBQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxJQUFvQztvQkFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxRyxDQUFDLENBQUMsQ0FBQztnQkFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLElBQThCO29CQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdFLENBQUMsQ0FBQyxDQUFDO2dCQUVILHFCQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLG9CQUFvQixFQUFFLFVBQVUsSUFBOEI7b0JBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDekUsdUVBQXVFO29CQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzNDLElBQU0sSUFBSSxHQUFHLHFCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZDLElBQU0sTUFBTSxHQUFHLHFCQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBRW5DLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEMsU0FBUyxDQUFDLHFCQUFxQixDQUMzQixJQUFJLENBQUMsNEJBQTRCOzBCQUMvQixJQUFJLENBQUMsZ0NBQWdDOzBCQUNyQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgscUJBQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxJQUE4QjtvQkFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLENBQUMsQ0FBQztnQkFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLElBQThCO29CQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdFLENBQUMsQ0FBQyxDQUFDO2dCQUVILHFCQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLG9CQUFvQixFQUFFLFVBQVUsSUFBOEI7b0JBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0UsQ0FBQyxDQUFDLENBQUM7Z0JBRUgscUJBQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxJQUFvQztvQkFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxRyxDQUFDLENBQUMsQ0FBQztnQkFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLElBQW9DO29CQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTt3QkFDbkUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hILENBQUMsQ0FBQyxDQUFDO2dCQUVILHFCQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQVUsSUFBeUM7b0JBQ3ZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDekUsNEVBQTRFO2dCQUNoRixDQUFDLENBQUMsQ0FBQztZQUlQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILGdCQUFhLENBQUMsMEJBQVksRUFBRSxVQUFVLElBQTBCO1lBQzVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNmLHVFQUF1RTtnQkFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLG1EQUFtRDtnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWEsQ0FBQyx5QkFBVyxFQUFFLFVBQVUsSUFBMEI7WUFDM0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsdUVBQXVFO2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsbURBQW1EO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQkFBYSxDQUFDLHVCQUFTLEVBQUUsVUFBVSxJQUEwQjtZQUN6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZix1RUFBdUU7Z0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixtREFBbUQ7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFhLENBQUMsNEJBQWMsRUFBRSxVQUFVLElBQTBCO1lBQzlELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNmLHVFQUF1RTtnQkFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLG1EQUFtRDtnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWEsQ0FBQyxnQ0FBa0IsRUFBRSxVQUFVLElBQTBCO1lBQ2xFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNmLGtFQUFrRTtnQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsdURBQXVEO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBRUwsQ0FBQztBQWhIRCxnREFnSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIG9uIGFzIGFwcGxpY2F0aW9uT24sXG4gICAgYW5kcm9pZCxcbiAgICBsYXVuY2hFdmVudCxcbiAgICBzdXNwZW5kRXZlbnQsXG4gICAgcmVzdW1lRXZlbnQsXG4gICAgZXhpdEV2ZW50LFxuICAgIGxvd01lbW9yeUV2ZW50LFxuICAgIHVuY2F1Z2h0RXJyb3JFdmVudCxcbiAgICBBcHBsaWNhdGlvbkV2ZW50RGF0YSxcbiAgICBzdGFydCBhcyBhcHBsaWNhdGlvblN0YXJ0LFxuICAgIEFuZHJvaWRBcHBsaWNhdGlvbixcbiAgICBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEsXG4gICAgQW5kcm9pZEFjdGl2aXR5QnVuZGxlRXZlbnREYXRhLFxuICAgIEFuZHJvaWRBY3Rpdml0eVJlc3VsdEV2ZW50RGF0YSxcbiAgICBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YVxufSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICd1dGlscy91dGlscyc7XG5cbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb246IGFueTtcbmRlY2xhcmUgdmFyIFVJU3RhdHVzQmFyU3R5bGU6IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckNvbG9ycygpIHtcblxuICAgIGlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgICAgICBhcHBsaWNhdGlvbk9uKGxhdW5jaEV2ZW50LCAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChhcmdzLmlvcykge1xuICAgICAgICAgICAgICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbikuc3RhdHVzQmFyU3R5bGUgPVxuICAgICAgICAgICAgICAgICAgICBVSVN0YXR1c0JhclN0eWxlLkxpZ2h0Q29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5hbmRyb2lkICYmIHBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49ICcyMScpIHtcbiAgICAgICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUNyZWF0ZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUJ1bmRsZUV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkgKyBcIiwgQnVuZGxlOiBcIiArIGFyZ3MuYnVuZGxlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5RGVzdHJveWVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5U3RhcnRlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIGFuZHJvaWQgYWN0aXZpdHkgY2xhc3MuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWN0aXZpdHk6IFwiICsgYXJncy5ldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBWaWV3ID0gYW5kcm9pZC5jb250ZXh0LnZpZXcuVmlldztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVBhdXNlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVJlc3VtZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlTdG9wcGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLnNhdmVBY3Rpdml0eVN0YXRlRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlCdW5kbGVFdmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5ICsgXCIsIEJ1bmRsZTogXCIgKyBhcmdzLmJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVJlc3VsdEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5UmVzdWx0RXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiwgcmVxdWVzdENvZGU6IFwiICsgYXJncy5yZXF1ZXN0Q29kZSArIFwiLCByZXN1bHRDb2RlOiBcIiArIGFyZ3MucmVzdWx0Q29kZSArIFwiLCBJbnRlbnQ6IFwiICsgYXJncy5pbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGFyZ3MuY2FuY2VsID0gdHJ1ZSB0byBjYW5jZWwgYmFjayBuYXZpZ2F0aW9uIGFuZCBkbyBzb21ldGhpbmcgY3VzdG9tLlxuICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXBwbGljYXRpb25PbihzdXNwZW5kRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkge1xuICAgICAgICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIGFuZHJvaWQgYWN0aXZpdHkgY2xhc3MuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpdml0eTogXCIgKyBhcmdzLmFuZHJvaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBpT1MgYXBwbGljYXRpb25zLCBhcmdzLmlvcyBpcyBVSUFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVUlBcHBsaWNhdGlvbjogXCIgKyBhcmdzLmlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcGxpY2F0aW9uT24ocmVzdW1lRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkge1xuICAgICAgICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIGFuZHJvaWQgYWN0aXZpdHkgY2xhc3MuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpdml0eTogXCIgKyBhcmdzLmFuZHJvaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBpT1MgYXBwbGljYXRpb25zLCBhcmdzLmlvcyBpcyBVSUFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVUlBcHBsaWNhdGlvbjogXCIgKyBhcmdzLmlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcGxpY2F0aW9uT24oZXhpdEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpIHtcbiAgICAgICAgICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkIGFjdGl2aXR5IGNsYXNzLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWN0aXZpdHk6IFwiICsgYXJncy5hbmRyb2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5pb3MpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgVUlBcHBsaWNhdGlvbi5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVJQXBwbGljYXRpb246IFwiICsgYXJncy5pb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhcHBsaWNhdGlvbk9uKGxvd01lbW9yeUV2ZW50LCBmdW5jdGlvbiAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpIHtcbiAgICAgICAgICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkIGFjdGl2aXR5IGNsYXNzLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWN0aXZpdHk6IFwiICsgYXJncy5hbmRyb2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5pb3MpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgVUlBcHBsaWNhdGlvbi5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVJQXBwbGljYXRpb246IFwiICsgYXJncy5pb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhcHBsaWNhdGlvbk9uKHVuY2F1Z2h0RXJyb3JFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IEFwcGxpY2F0aW9uRXZlbnREYXRhKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIEFuZHJvaWQgYXBwbGljYXRpb25zLCBhcmdzLmFuZHJvaWQgaXMgYW4gTmF0aXZlU2NyaXB0RXJyb3IuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOYXRpdmVTY3JpcHRFcnJvcjogXCIgKyBhcmdzLmFuZHJvaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBpT1MgYXBwbGljYXRpb25zLCBhcmdzLmlvcyBpcyBOYXRpdmVTY3JpcHRFcnJvci5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5hdGl2ZVNjcmlwdEVycm9yOiBcIiArIGFyZ3MuaW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19