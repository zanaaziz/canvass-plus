import { Component, OnInit } from '@angular/core';
import { AuthService } from '../routes/auth/auth.service';
import { Router } from '@angular/router';
import { SnackService } from '../shared/snack.service';
import { BreakpointObserverService } from '../shared/breakpoint-observer.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private _bottomSheet: MatBottomSheet,
        private authService: AuthService,
        private router: Router,
        private snackService: SnackService,
        private breakpointObserverService: BreakpointObserverService
    ) { }

    user: firebase.User;
    isMobile: boolean;

    onAddResidence(): void {
        this._bottomSheet.open(AddResidenceSheet);
    }

    onLogout(): void {
        this.authService.logout();
        this.snackService.open('Till next time!');
        this.router.navigate(['/auth']);
    }

    ngOnInit() {
        // subscribe to authentication state
        this.authService.state()
        .subscribe(
            user => {
                this.user = user;
                this.authService.user = this.user;
            }
        );

        // subscribe to breakpoint observer to detect mobile mode
        this.breakpointObserverService.isMobile()
        .subscribe(
            res => {
                this.isMobile = res.matches;
            }
        );
    }

}

@Component({
    selector: 'add-residence-sheet',
    templateUrl: 'add-residence-sheet.html',
    styleUrls: ['add-residence-sheet.scss']
})
export class AddResidenceSheet implements OnInit {
    
    constructor(private _bottomSheetRef: MatBottomSheetRef<AddResidenceSheet>) {}

    addResidenceForm: FormGroup;

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }

    onSubmit(): void {
        this._bottomSheetRef.dismiss();
    }

    ngOnInit() {
        this.addResidenceForm = new FormGroup({
            status: new FormControl(null, Validators.required),
			address: new FormControl(null, Validators.required),
			contact: new FormControl(null)
        });

        // get current location if supported by browser
        if (navigator.geolocation) {
            navigator.geolocation
            .getCurrentPosition(
                (position: Position) => {
                    this.addResidenceForm.get('address').setValue(position['coords']['latitude'] + ', ' + position['coords']['longitude']);
                }
            );

        } else {
            console.error('Geolocation is not supported by this browser.');

        }
    }
}
