import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public hamburguerOpen: boolean = false;
  public shouldBeOpened: boolean = true;
  openHambMenu(event: string){
    if(!this.hamburguerOpen) {
      $(event).animate({
        right: 0 
      },{
        start: ()=>{
          this.shouldBeOpened = false
        },
        complete: ()=>{
          this.shouldBeOpened = true
        }
      })
      this.hamburguerOpen = true;
    } else {
      $(event).animate({
        right: "100vw"
      },{
        start: ()=>{
          this.shouldBeOpened = false
        },
        complete: ()=>{
          this.shouldBeOpened = true
        }
      });
      this.hamburguerOpen = false;     
    }
  } 
}

