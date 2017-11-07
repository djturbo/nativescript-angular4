import { Component, OnInit } from '@angular/core';

import { ItemTypeEnum, StatusEnum, PriorityEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

@Component({
    selector: 'pt-item',
    templateUrl: './pt-backlog/pt-item/pt-item.component.html',
    styleUrls: ['./pt-backlog/pt-item/pt-item.component.scss']
})
export class PTItemComponent implements OnInit {
    public item: IPTItem;
    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.item = ITEM;
        });
    }
}

const ITEM: IPTItem =
    { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };