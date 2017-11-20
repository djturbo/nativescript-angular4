import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { Page } from "ui/page";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-pro-ui/sidedrawer';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { BacklogService } from '../services';
import { AddItemModalComponent } from "./shared/add-item-modal.component";
import { PTDomain } from '../typings/domain';
import INewItem = PTDomain.INewItem;


@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styleUrls: ['pt-backlog.component.scss']
})
export class PTBacklogComponent implements OnInit, AfterViewInit {
    private _currentLocation: SideDrawerLocation;
    private _mainContentText: string;

    public selectedViewIndex: number;

    constructor(
        private page: Page,
        private _changeDetectionRef: ChangeDetectorRef,
        private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) {
        this.page.on("loaded", this.onLoaded, this);
        this.selectedViewIndex = 1;
    }
    public onLoaded() {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }
    get currentLocation(): SideDrawerLocation {
        return this._currentLocation;
    }

    set currentLocation(value: SideDrawerLocation) {
        this._currentLocation = value;
    }

    ngOnInit() {
        this.mainContentText = "SideDrawer";
        this.currentLocation = SideDrawerLocation.Right;
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public showSlideout() {
        this.drawer.showDrawer();
    }

    public logoutTap() {
        alert('LOGOUT');
    }

    public selectFilteredView(index: number, title: string) {
        this.selectedViewIndex = index;
        this._mainContentText = title;
    }
    public showAddItemModal() {
        const options: ModalDialogOptions = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(AddItemModalComponent, options).then((newItem: INewItem) => {
            if (newItem != null) {
                //this.backlogService.addNewPTItem(newItem, null);
            }
        });
    }

}