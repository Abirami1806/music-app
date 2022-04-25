import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public nts: Note[] = [];
  public errMessage: string = "";
  constructor(private ntservice:NotesService) { }

  ngOnInit(): void {
    this.ntservice.getNotes().subscribe((data => this.nts = data), (error => this.errMessage = error.message));
  }

}