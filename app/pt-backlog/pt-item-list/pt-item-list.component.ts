import { Component, OnInit } from '@angular/core';
/* Import services */
import { BacklogService } from '../../services';

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
        this.ptItems = this.backlogService.allItems;
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
