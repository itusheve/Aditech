var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BsModalService } from "ngx-bootstrap";
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var ConfirmationModalComponent = (function () {
    function ConfirmationModalComponent(modalService) {
        this.modalService = modalService;
        this.active = false;
    }
    ConfirmationModalComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
    };
    ConfirmationModalComponent.prototype.showConfirmationModal = function (title, body) {
        this.title = title;
        this.body = body;
        this.active = true;
        this.modalRef = this.modalService.show(this.modal);
    };
    ConfirmationModalComponent.prototype.onConfirm = function () {
        this.active = false;
        this.onClose.next(true);
        this.modalRef.hide();
    };
    ConfirmationModalComponent.prototype.onCancel = function () {
        this.active = false;
        this.onClose.next(false);
        this.modalRef.hide();
    };
    ConfirmationModalComponent.prototype.hideConfirmationModal = function () {
        this.active = false;
        this.onClose.next(null);
        this.modalRef.hide();
    };
    ConfirmationModalComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(this.modal);
    };
    __decorate([
        ViewChild('modal'),
        __metadata("design:type", TemplateRef)
    ], ConfirmationModalComponent.prototype, "modal", void 0);
    ConfirmationModalComponent = __decorate([
        Component({
            selector: 'app-confirmation-modal',
            templateUrl: './confirmation-dialog.component.html'
        }),
        __metadata("design:paramtypes", [BsModalService])
    ], ConfirmationModalComponent);
    return ConfirmationModalComponent;
}());
export { ConfirmationModalComponent };
//# sourceMappingURL=/Applications/MAMP/htdocs/Aditech/movie-test/src/app/components/confirmation-dialog/confirmation-dialog.component.js.map