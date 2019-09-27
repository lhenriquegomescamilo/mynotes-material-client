import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../store/note/note.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-notes-nav-list',
  templateUrl: './notes-nav-list.component.html',
  styleUrls: ['./notes-nav-list.component.css']
})
export class NotesNavListComponent implements OnInit {

  @Input() notes$: Observable<Note[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
