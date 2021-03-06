import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthRoutingModule} from './auth-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/auth.effects';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authStateKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
}
