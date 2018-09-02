var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Input } from "@angular/core";
var NotificationsComponent = (function () {
    function NotificationsComponent() {
        this.isShow = false;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.show = function () {
        var _this = this;
        this.isShow = true;
        setTimeout(function () {
            _this.isShow = false;
        }, 3000);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationsComponent.prototype, "alertType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationsComponent.prototype, "alertMessage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationsComponent.prototype, "alertClass", void 0);
    NotificationsComponent = __decorate([
        Component({
            selector: 'app-notifications',
            templateUrl: './notifications.component.html',
            styleUrls: ['./notifications.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
export { NotificationsComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/notifications/notifications.component.js.map