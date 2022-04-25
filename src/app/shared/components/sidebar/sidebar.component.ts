import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/image';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public nts: Image[] = [];
  public errMessage: string = "";
  constructor(private ntservice:NotesService) { }

  ngOnInit(): void {
    this.ntservice.getImages().subscribe((data => this.nts = data), (error => this.errMessage = error.message));
  }

}