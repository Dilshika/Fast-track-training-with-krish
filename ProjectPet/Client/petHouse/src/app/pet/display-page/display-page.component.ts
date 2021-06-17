import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {


  title:string='Pet Registration House';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Reload(){
   window.location.reload();
  }

}
