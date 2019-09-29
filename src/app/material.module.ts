import {NgModule} from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
} from '@angular/material';
@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule, 
        MatInputModule, 
        ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule, 
      ],
  })
  export class MaterialModule { }
