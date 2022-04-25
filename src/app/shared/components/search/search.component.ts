import { Component, OnInit } from '@angular/core';
import { NapsterService } from 'src/app/napster.service';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public lnk: any = "hvla";
  public artists = "";
  public img: any = [];
  public tracks: any = [];
  public info: any;
  public searchQuery = "";

  public errMessage: string = "";
  public nt: Note= new Note("", "","");
  public note: Note = new Note("", "","");
  public nts: Note[] = [];
  public val: Note[] = [];

  constructor(private napservice: NapsterService,private ntservice:NotesService ) { 
  }
  ngOnInit(): void {
  }

  public searchArtists(){
   this.napservice.getAllArtists(this.searchQuery).subscribe( (data) => {
      this.artists = data.search.data.artists[0].links.images.href;
      this.info = data.search.data.artists;
      console.log(this.info,this.info.length);
      for(let i=0; i< this.info.length; i++){
        this.napservice.get(this.info[i].links.images.href).subscribe( (data) => {
          (data.images[0].url)?(this.img[i] = <string>(data.images[0].url)):(this.img[i]= (""))
          console.log((data.images[0].url))
          console.log("hi",(this.img[i]),i,"end")
        });
        this.napservice.get(this.info[i].links.topTracks.href).subscribe( (data) => {
          (data.tracks[0])?(this.tracks[i] = <string>(data.tracks[0].previewURL)):(this.tracks[i]= (""))
          console.log((data.tracks[0]))
          console.log("tracks",(this.tracks[i]),i,"end")
        });
      }
    });
   // this.napservice.get().subscribe( (data) => {
     // this.img = data.images[0].url;
  //  });
  //this.info[i].links.images.href
  }
 
  public addRecommend(value1: string, value2: string,value3:string) {
    this.nt = new Note("", "","");
    this.nt.title = value1;
    this.nt.text = value2;
    this.nt.tracks=value3;
    console.log(this.nt.title, typeof(this.nt.title));
    console.log(this.nt.text);
    if (!this.nt.title && !this.nt.text) {
     this.errMessage = 'Title and Text both are required fields';
     console.log(this.errMessage);
   }
    this.ntservice.addNote(this.nt).subscribe((data => this.note = data), (error => this.errMessage = error.message));
    
   }
   public addFavourites(value1: string, value2: string,value3:string) {
    this.nt = new Note("", "","");
    this.nt.title = value1;
    this.nt.text = value2;
    this.nt.tracks=value3;
    console.log(this.nt.title, typeof(this.nt.title));
    console.log(this.nt.text);
    if (!this.nt.title && !this.nt.text) {
     this.errMessage = 'Title and Text both are required fields';
     console.log(this.errMessage);
   }
    this.ntservice.addFav(this.nt).subscribe((data => this.note = data), (error => this.errMessage = error.message));
    
   }
}