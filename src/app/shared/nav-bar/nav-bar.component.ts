import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import {UserRegisterResponse} from '../../auth/model/user-register-response.model';
import {EMPTY, Observable} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {catchError, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {AppPropertiesService} from '../../core/services/app-properties.service';
import {isAdmin, isUser, tokenDecoded, userDetails} from '../../store/principal/principal.selectors';
import {Logout} from '../../store/principal/principal.actions';
import {JwtTokenDetails} from '../../core/services/auth.service';
import {SnackBarService} from '../../core/services/snack-bar.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  @HostBinding('class') classes = 'mat-elevation-z4';

  user$: Observable<UserRegisterResponse> = this.store.select(userDetails);
  token$: Observable<JwtTokenDetails> = this.store.select(tokenDecoded);
  isAdmin$: Observable<boolean> = this.store.select(isAdmin);
  isUser$: Observable<boolean> = this.store.select(isUser);
  switchFrontendLink = this.appProps.switchFrontendHref === '' ? null : this.document.location.origin + this.appProps.switchFrontendHref;

  constructor(private http: HttpService,
              private store: Store<AppState>,
              private appProps: AppPropertiesService,
              private snackBar: SnackBarService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
  }

  exportAsExcel() {
    this.http.getAllNotesAsExcel().pipe(
      map(response => this.http.redirectBlobToBrowser(response)),
      catchError(() => {
        // see also https://github.com/angular/angular/issues/19888
        this.snackBar.openError('Failed to get an Excel file');
        return EMPTY;
      })
    ).subscribe();
  }

  onLogout() {
    // TODO: show confirmation dialog before
    this.store.dispatch(new Logout());
  }

}
