import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  public nts: Note[] = [];
  public errMessage: string = "";
  constructor(private ntservice:NotesService) { }

  ngOnInit(): void {
    this.ntservice.getFav().subscribe((data => this.nts = data), (error => this.errMessage = error.message));
  }

}