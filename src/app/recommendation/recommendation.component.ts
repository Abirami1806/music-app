import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  public nts: Note[] = [];
  public errMessage: string = "";
  constructor(private ntservice:NotesService) { }

  ngOnInit(): void {
    this.ntservice.getNotes().subscribe((data => this.nts = data), (error => this.errMessage = error.message));
  }

}
