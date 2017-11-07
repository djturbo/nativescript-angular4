"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pt_item_component_1 = require("./pt-item.component");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    PTItemModule = __decorate([
        core_1.NgModule({
            declarations: [
                pt_item_component_1.PTItemComponent
            ],
            imports: [
                common_1.CommonModule,
                nativescript_module_1.NativeScriptModule
            ],
            exports: [
                pt_item_component_1.PTItemComponent
            ],
            providers: [],
        })
    ], PTItemModule);
    return PTItemModule;
}());
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFFL0MsZ0ZBQThFO0FBRTlFLHlEQUFzRDtBQWF0RDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVp4QixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsbUNBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1osd0NBQWtCO2FBQUM7WUFDdkIsT0FBTyxFQUFFO2dCQUNMLG1DQUFlO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IFBUSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUFRJdGVtQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFBUSXRlbUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtTW9kdWxlIHsgfSJdfQ==