import { NgModule } from '@angular/core';

import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        AuthRoutingModule,
        MaterialModule,
    ]
})
export class AuthModule {}

