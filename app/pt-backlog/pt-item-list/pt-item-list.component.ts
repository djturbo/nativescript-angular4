import { Component, OnInit } from '@angular/core';
/* Import services */
import { BacklogService } from '../../services/backlog.service';

import { ItemTypeEnum, StatusEnum, PriorityEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;


@Component({
    selector: 'pt-item-list',
    templateUrl: './pt-backlog/pt-item-list/pt-item-list.component.html',
    styleUrls: ['./pt-backlog/pt-item-list/pt-item-list.component.scss']
})
export class PTItemListComponent implements OnInit {
    public ptItems: IPTItem[];

    constructor(private backlogService: BacklogService) { }

    ngOnInit() {
        this.ptItems = ITEMS;
    }

    public getIndicatorClass(item: IPTItem) {
        return ItemTypeEnum.getIndicatorClass(item.type);
    }

    /* Events  */
    onLoaded(event): void {
        console.log('onLoaded event: ', event);
    }
    onItemLoading(event): void {
        console.log("onItemLoading ", event);
    }
    onItemTap(event): void {
        console.log('onItemTap ', event);

        let lv = event.object;
        console.log('onItemTap lv: ', lv);

        let item = lv.items[event.index];
        alert(item.title);
    }
}
const ITEMS: IPTItem[] = [
    { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '2', title: 'item 2', description: 'item 2 desc', estimate: 10, priority: PriorityEnum.Medium, status: StatusEnum.ReOpened, tasks: [], type: ItemTypeEnum.PBI, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '3', title: 'item 3', description: 'item 3 desc', estimate: 12, priority: PriorityEnum.High, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Chore, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '4', title: 'item 4', description: 'item 4 desc', estimate: 6, priority: PriorityEnum.Critical, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Impediment, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '5', title: 'item 5', description: 'item 5 desc', estimate: 20, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null }
];