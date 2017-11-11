import {
    on as applicationOn,
    android,
    launchEvent,
    suspendEvent,
    resumeEvent,
    exitEvent,
    lowMemoryEvent,
    uncaughtErrorEvent,
    ApplicationEventData,
    start as applicationStart,
    AndroidApplication,
    AndroidActivityEventData,
    AndroidActivityBundleEventData,
    AndroidActivityResultEventData,
    AndroidActivityBackPressedEventData
} from "application";


import * as platform from 'platform';
import * as utils from 'utils/utils';

declare var UIApplication: any;
declare var UIStatusBarStyle: any;

export function setStatusBarColors() {

    if (platform.isIOS) {
        applicationOn(launchEvent, (args: ApplicationEventData) => {
            if (args.ios) {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle =
                    UIStatusBarStyle.LightContent;
            } else if (args.android && platform.device.sdkVersion >= '21') {
                android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
                });

                android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });

                android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                    // For Android applications, args.android is an android activity class.
                    console.log("Activity: " + args.eventName);
                    const View = android.context.view.View;
                    const window = android.startActivity.getWindow();
                    window.setStatusBarColor(0x000000);

                    const decorView = window.getDecorView();
                    decorView.setSystemUiVisibility(
                        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
                });

                android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });

                android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });

                android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                });

                android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
                });

                android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity +
                        ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
                });

                android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
                    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                    // Set args.cancel = true to cancel back navigation and do something custom.
                });



            }
        });
        applicationOn(suspendEvent, function (args: ApplicationEventData) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            } else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });

        applicationOn(resumeEvent, function (args: ApplicationEventData) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            } else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });

        applicationOn(exitEvent, function (args: ApplicationEventData) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            } else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });

        applicationOn(lowMemoryEvent, function (args: ApplicationEventData) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            } else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });

        applicationOn(uncaughtErrorEvent, function (args: ApplicationEventData) {
            if (args.android) {
                // For Android applications, args.android is an NativeScriptError.
                console.log("NativeScriptError: " + args.android);
            } else if (args.ios) {
                // For iOS applications, args.ios is NativeScriptError.
                console.log("NativeScriptError: " + args.ios);
            }
        });
    }

}