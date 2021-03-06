import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotebooksRoutingModule} from './notebooks-routing.module';
import {NotebooksContainerComponent} from './container/notebooks-container.component';
import {NotebooksListComponent} from './notebooks-list/notebooks-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import {StoreModule} from '@ngrx/store';
import * as fromNotebook from './store/notebook/notebook.reducer';
import * as fromNote from './store/note/note.reducer';
import {EffectsModule} from '@ngrx/effects';
import {NotebookEffects} from './store/notebook/notebook.effects';
import {NotebookOperationsMenuComponent} from './notebooks-list/notebook-operations-menu/notebook-operations-menu.component';
import {NotebookDialogComponent} from './notebooks-list/notebook-dialog/notebook-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotesListComponent} from './notes-list/notes-list.component';
import {NoteEffects} from './store/note/note.effects';
import {NoteDialogComponent} from './notes-list/note-dialog/note-dialog.component';
import {NoteOperationsMenuComponent} from './notes-list/note-operations-menu/note-operations-menu.component';
import {NotesNavListComponent} from './notes-list/notes-nav-list/notes-nav-list.component';
import {NotebooksNavListComponent} from './notebooks-list/notebooks-nav-list/notebooks-nav-list.component';
import {NoteCardComponent} from './notes-list/note-card/note-card.component';
import {NavBarModule} from '../shared/nav-bar/nav-bar.module';
import {NoteMoveDialogComponent} from './notes-list/note-move-dialog/note-move-dialog.component';
import {ConfirmDialogModule} from '../shared/dialogs/confirm-dialog.module';

@NgModule({
  declarations: [
    NotebooksContainerComponent,
    NotebooksListComponent,
    NotebookOperationsMenuComponent,
    NoteDialogComponent,
    NotebookDialogComponent,
    NotesListComponent,
    NoteOperationsMenuComponent,
    NotesNavListComponent,
    NotebooksNavListComponent,
    NoteCardComponent,
    NoteMoveDialogComponent,
  ],
  imports: [
    ConfirmDialogModule,
    NavBarModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NotebooksRoutingModule,
    EffectsModule.forFeature([NotebookEffects, NoteEffects]),
    StoreModule.forFeature(fromNotebook.notebooksFeatureKey, fromNotebook.reducer),
    StoreModule.forFeature(fromNote.notesFeatureKey, fromNote.reducer),
  ],
  entryComponents: [NotebookDialogComponent, NoteDialogComponent, NoteMoveDialogComponent]
})
export class NotebooksModule {
}
