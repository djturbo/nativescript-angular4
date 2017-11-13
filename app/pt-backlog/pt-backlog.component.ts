import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-pro-ui/sidedrawer';

@Component({
    selector: 'pt-backlog',
    templateUrl: './pt-backlog/pt-backlog.component.html',
    styleUrls: ['./pt-backlog/pt-backlog.component.scss']
})
export class PTBacklogComponent implements OnInit, AfterViewInit {

    private _drawer: SideDrawerType;
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = SideDrawerLocation.Right;
    }

    public showSlideout() {
        this._drawer.showDrawer();
    }

    public logoutTap() {
        alert('LOGOUT');
    }
}