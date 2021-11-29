import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../classes/menu-item.model';
import { DatabaseService } from '../database/database.service';
@Component({
    selector: 'lacc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    constructor(private databaseService: DatabaseService) {}

    private menuItem: MenuItem[]=[];

    ngOnInit() {
        
    }
}
