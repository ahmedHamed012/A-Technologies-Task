import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'footer',
    standalone:true,
    imports:[ButtonModule],
    template:  `
        <div class="flex w-full justify-content-end mt-3">
            <p-button type="button" label="Cancel" icon="pi pi-times" (click)="closeDialog({ buttonType: 'Cancel', summary: 'No Product Selected' })"></p-button>
        </div> `
})
export class Footer {
    constructor(public ref: DynamicDialogRef) {}

    closeDialog(data:any) {
        this.ref.close(data);
    }
}