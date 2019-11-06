import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
    id: string;
    username: string;
}

@Component({
    selector: 'app-canvassers',
    templateUrl: './canvassers.component.html',
    styleUrls: ['./canvassers.component.scss']
})
export class CanvassersComponent implements OnInit {

    constructor() {
        // Create canvassers
        const canvassers = Array.from({length: 10}, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(canvassers);
    }

    displayedColumns: string[] = ['id', 'username', 'actions'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const username = 'johndoe#' + Math.round((Math.random() * 100) + 1).toString();

    return {
        id: id.toString(),
        username: username
    };
}
