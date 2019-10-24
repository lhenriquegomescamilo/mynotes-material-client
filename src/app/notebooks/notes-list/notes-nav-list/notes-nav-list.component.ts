import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../store/note/note.model';
import {Observable} from 'rxjs';
import {AppPropertiesService} from '../../../core/services/app-properties.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-notes-nav-list',
  templateUrl: './notes-nav-list.component.html',
  styleUrls: ['./notes-nav-list.component.css']
})
export class NotesNavListComponent implements OnInit {

  @Input() notes$: Observable<Note[]>;
  private fragment$: Observable<string> = this.route.fragment;
  private pathWithoutFragment = this.location.path(false);
  private isSearchContext: boolean = !this.pathWithoutFragment.endsWith('notes');

  constructor(private appProps: AppPropertiesService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
  }

  unHighlight() {
//    this.location.replaceState(this.pathWithoutFragment);
    this.router.navigate([this.pathWithoutFragment]);
  }

}
