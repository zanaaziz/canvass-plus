import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { AuthComponent } from './routes/auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent, AddResidenceSheet } from './routes/home/home.component';
import { LogsComponent } from './routes/logs/logs.component';
import { CanvassersComponent } from './routes/canvassers/canvassers.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AddResidenceSheet,
        LogsComponent,
        CanvassersComponent
    ],
    entryComponents: [
        AddResidenceSheet
    ],
    imports: [
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
