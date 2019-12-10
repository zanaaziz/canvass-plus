import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import {
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule
} from "@angular/material";

import { environment } from 'src/environments/environment';
import { AuthComponent } from './routes/auth/auth.component';
import { HeaderComponent, AddResidenceSheet } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpreadsheetComponent } from './routes/spreadsheet/spreadsheet.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
        FooterComponent,
        AddResidenceSheet,
        SpreadsheetComponent
    ],
    entryComponents: [
        AddResidenceSheet
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
		ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatBottomSheetModule,
        MatSelectModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
