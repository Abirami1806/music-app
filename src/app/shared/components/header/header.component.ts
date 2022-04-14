import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()
  constructor(private r:Router) { }

  ngOnInit(): void {
  }
toggleSideBar()
{
  this.toggleSideBarForMe.emit();
}
gotoDashboard()
{
  this.r.navigate(['/login']);
}
}