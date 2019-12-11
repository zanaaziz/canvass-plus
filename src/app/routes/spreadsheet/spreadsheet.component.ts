import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

export interface UserData {
    id: string;
    address: string;
    contact: string;
    status: string;
}

/** Constants used to fill up our data base. */
const STATUS: string[] = ['Positive', 'Negative', 'Neutral'];

const ADDRESS: string[] = [
    '1 Holt Lane, Kingsley, ST10 2BA',
    'Unit 3B, Sherbrook Business Centre, Sherbrook Road, Daybrook, NG5 6AT',
    '5 Donnington Walk, Keynsham, BS31 2NP',
    '2 Lavender Walk, North Petherton, TA5 2GU',
    '64 Greenfield Road, Pulloxhill, MK45 5EG',
    '92 Portnalls Road, Coulsdon, CR5 3DF',
    '8 Wenlock Road, Bridgnorth, WV16 4QE',
    '1 Quebec Close, Liphook, GU30 7UJ',
    '136 Corporation Road, Gillingham, ME7 1RQ',
    'Co-Operative Retail Services Ltd, Parsons Drive, Ryton, NE40 3RA',
    '15 Hospital Road, Chasetown, WS7 4SF',
    'Apartment 39, Zeller House, 21 Scarlet Close, Olympic Park, E20 1FL',
    'The Bungalow, Cranberry, Cotes Heath, ST21 6SQ',
    '15 Bentham Avenue, Worcester, WR4 0RF',
    'Graianfryn, Llanddaniel, LL60 6DY',
    '10 Bryant Avenue, Southend-On-Sea, SS1 2YD',
    '12 Rye Place, Leeds, LS14 6AG',
    '910 Whalley New Road, Blackburn, BB1 9BD',
    '39 Clifton Road, Sharlston Common, WF4 1AS',
    'West Bank, Blackmore Road, Blackmore, CM4 0JT',
    '145 Victoria Road, Wednesfield, WV11 1RL',
    '5 Market Place, Kingston Upon Thames, KT1 1JX',
    '6 Kitelee Close, Hanslope, MK19 7JT',
    'Derrymount, Cheriton Hill, North Cheriton, BA8 0AB',
    '44 Pleydell Avenue, London, SE19 2LP',
    '12 Hyde Road, Montacute, TA15 6UW',
    '44 Springfield Drive, Ilford, IG2 6QR',
    '1 Slade Lane, Shrawley, WR6 6TH',
    '1 Maes Y Braich, Dolwyddelan, LL25 0YQ',
    '120 Eagle Street, Coventry, CV1 4GQ',
    '17 Howard Drive, Ackworth, WF7 7RB',
    'Trerubies, Upton Farm, Trebarwith, PL33 9DG',
    'Flat 108, West Plaza, Town Lane, Stanwell, TW19 7FG',
    '6 Foxhome Close, Chislehurst, BR7 5XT',
    '118 Kingshill Avenue, Romford, RM5 2SA',
    'The Bungalow, Honiley Road, Beausale, CV35 7NX',
    '18 Spring Lane, Watlington, OX49 5QN',
    '2 Wren Court, Calne, SN11 8LW',
    '237 Monmouth Drive, Sutton Coldfield, B73 6JS',
    '112 Lea Bank Road, Netherton, DY2 0BA',
    '3 Chapel Hill, Blacker Hill, S74 0RY',
    '21 Shepard Close, Nottingham, NG6 7BP',
    '155 Errwood Road, Manchester, M19 1JN',
    'Kimberley, West End, Blackwater, TR4 8EX',
    '26 Inglethorpe Street, London, SW6 6NT',
    '17 Pepys Terrace, Impington, CB24 9NT',
    '5 Raeburn Avenue, Surbiton, KT5 9BN',
    '5 Earls Holme, Kempston, MK42 8PG',
    '9 Cromwell Terrace, Cockermouth, CA13 0AA',
    '9 The Jetty, Hackleton, NN7 2AJ',
    '6 Central Avenue, London, SW6 2QE',
    '5 Chancellor Grove, Dringhouses, YO24 1UQ',
    '11 Beech Close, Alderley Edge, SK9 7LY',
    '29 Canal View Lane, Moira, DE12 6AH',
    '5 Courtlands, Billericay, CM12 9HX',
    'Highfield, Cwm Lane, Rogerstone, NP10 9GQ',
    '167 Kingston Road, Staines, TW18 1PB',
    'Loddington Coppice Farm, Old, NN6 9RS',
    'Hopyard Cottage, Penstrowed, SY17 5SG',
    '8 Greengate Close, Bury, BL9 7AW',
    'Flat A, 374 Upper Richmond Road West, London, SW14 7JU',
    '6 Newton Drive, Sawbridgeworth, CM21 9HE',
    '17 Parc Tyddyn, Red Wharf Bay, LL75 8NQ',
    '2 Dunmow Road, Sheffield, S4 8HY',
    '5 Park View Terrace, Leeds, LS15 7QT',
    '54 Fore Street, St Columb, TR9 6AL',
    'Industrial Unit At, Martin Markhams Yard, Stamford, PE9 1XF',
    '77 Westborough, Scarborough, YO11 1TP',
    '7 Sneyd Terrace, Newcastle, ST5 6JT',
    'Highfield, Breckon Hill, Butterknowle, DL13 5QA',
    '26 Guy Street, Padiham, BB12 8NF',
    '26 Blakeland Street, Birmingham, B9 5XG',
    '1 Maes Y Braich, Dolwyddelan, LL25 0YQ',
    'Flat 3, Sanctuary Court, 65 Croydon Road, London, SE20 7TE',
    '2 Diana Close, Dorchester, DT1 2QY',
    'Hill House, Tattenham Corner Road, Epsom, KT18 5PP',
    '4 Eastfield Avenue, Whitley Bay, NE25 8LT',
    '54 Waterloo Road, Yardley, B25 8JR',
    '2 Fox & Hounds Place, Tilston, SY14 7EF',
    '1 Park View, Margate, CT9 2AU',
    'Brook House, Berrington, WR15 8TJ',
    '4 Mereways, Shirley, B90 1TR',
    '15 Osprey Close, Walsgrave, CV2 2DQ',
    '25 The Chevenings, Sidcup, DA14 4LA',
    '20 Mount Pleasant Way, Milford Haven, SA73 1AB',
    '3 - 5 Deer Street, Bacup, OL13 8QW',
    '68 Charter Street, Gillingham, ME7 1NG',
    'Flat 13, Marine Court, Marine Parade, Barmouth, LL42 1NB',
    '33 Moat House Way, Conisbrough, DN12 3GE',
    'Appletree Cottage, 21 Faringdon Road, Stanford In The Vale, SN7 8NN',
    'The Lodge, Ashford Carbonel, SY8 4DD',
    '6 Nightingale Drive, Woodville, DE11 7QQ',
    '79 Brookfield Crescent, London, NW7 2DE',
    'Elmhurst, Shrewsbury Road, Preston Gubbals, SY4 3AL',
    '10 Alder Way, Gowerton, SA4 3FR',
    '8 Oastview, Rainham, ME8 8JQ',
    'Flat 4, Heverfield Court, Crusoe Road, Mitcham, CR4 3LG',
    'South Rookery, Rookery Lane, Lowsonford, B95 5EL',
    '11 Clarence Gardens, Crook, DL15 9EZ',
    '40 Weymouth Road, Hayes, UB4 8NF'
];

@Component({
    selector: 'app-spreadsheet',
    templateUrl: './spreadsheet.component.html',
    styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {

    constructor(
        private titleService: Title
    ) {
        // Create users
        const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    displayedColumns: string[] = ['id', 'address', 'contact', 'status', 'actions'];
    dataSource: MatTableDataSource<UserData>;
    loading: boolean;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {
        this.titleService.setTitle('Spreadsheet | Canvass+');

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
    const address = ADDRESS[Math.round(Math.random() * (ADDRESS.length - 1))];

    return {
        id: id.toString(),
        address: address,
        contact: '01' + Math.round(100000 + Math.random() * 900000).toString() + Math.round((Math.random() * 9) + 1).toString(),
        status: STATUS[Math.round(Math.random() * (STATUS.length - 1))]
    };
}
