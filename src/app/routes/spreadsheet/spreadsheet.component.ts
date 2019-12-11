import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

export interface Residence {
    id: string;
    address: string;
    contact: string;
    status: string;
}

@Component({
    selector: 'app-spreadsheet',
    templateUrl: './spreadsheet.component.html',
    styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {

    constructor(private titleService: Title) { }

    displayedColumns: string[] = ['id', 'address', 'contact', 'status', 'actions'];
    dataSource: MatTableDataSource<Residence>;
    residences: Residence[] = [];
    loading: boolean;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {
        this.titleService.setTitle('Spreadsheet | Canvass+');

        // example
        this.residences.push({
            id: '1',
            address: '111 Sasparilla Road, Somewhere, Someplace.',
            contact: '01 111 7676',
            status: 'Positive'
        });

        this.dataSource = new MatTableDataSource(this.residences);
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
