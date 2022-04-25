export class Note {
    public title: string;
    public text: string;
    public tracks:string;
    constructor(title:string, text:string,tracks:string) {
        this.title = title;
        this.text = text;
        this.tracks=tracks;
    }
  }