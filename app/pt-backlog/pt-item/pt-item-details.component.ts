import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { BacklogService } from '../../services';

import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

import { ItemTypePickerModalComponent } from "../shared/item-type-picker-modal.component";
@Component({
    moduleId: module.id,
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.component.html',
    styleUrls: [' pt-item-details.component.scss']
})
export class PTItemDetailsComponent implements OnInit {
    public item: IPTItem;
    public formFieldGridCols = '90, *, 90';
    constructor(
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private backlogService: BacklogService
    ) { }

    public ngOnInit() {
        debugger;
        console.log("PTItemDetailsComponent onInit");
        this.backlogService.getItem('2').then(
            item => {
                debugger;
                console.log("PTItemDetailsComponent item: ", item);
                this.item = item;
            },
            err => {
                console.log("pt-item-details.component.ts error: ", err);
            });
    }

    public showTypeModal() {
        const options: ModalDialogOptions = {
            context: { itemTitle: this.item.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(ItemTypePickerModalComponent, options).then((res: ItemTypeEnum) => {
            if (res) {
                console.log(res);
                this.item.type = res;
            }
        });
    }
}