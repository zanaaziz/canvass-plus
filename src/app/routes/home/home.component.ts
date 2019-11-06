import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private _bottomSheet: MatBottomSheet
    ) { }

    addResidenceForm: FormGroup;

    onAdd(): void {
        this._bottomSheet.open(AddResidenceSheet);
    }

    ngOnInit() {
        this.addResidenceForm = new FormGroup({
            status: new FormControl(null, [Validators.required]),
			address: new FormControl(null, Validators.required)
        });
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

        this.addResidenceForm.get('address').setValue('Mayor Street Lower, IFSC, Dublin, Ireland.');
    }
}
