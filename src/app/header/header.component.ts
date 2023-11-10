import { Component } from '@angular/core';
import * as $ from 'jquery';


window.addEventListener("resize", (event) => {
  console.log("Width cambiando");
  if(window.innerWidth < 600){

  }
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public hamburguerOpen: boolean = false;
  public shouldBeOpened: boolean = true;
  openHambMenu(event: string) {
    console.log(window.innerWidth);
    if (isMobile()) {
      if(window.innerWidth <= 600){
        //MOBILES
        if (!this.hamburguerOpen) {
          $('body').css('overflow', 'hidden');
          $(event).animate({
            right: 0
          }, {
            start: () => {
              this.shouldBeOpened = false
            },
            complete: () => {
              this.shouldBeOpened = true
            }
          })
          this.hamburguerOpen = true;
        } else {
          $('body').css('overflow', 'auto');
          $(event).animate({
            right: "100vw"
          }, {
            start: () => {
              this.shouldBeOpened = false
            },
            complete: () => {
              this.shouldBeOpened = true
            }
          });
          this.hamburguerOpen = false;
        } 
      } else {
        //TABLETS
        if (!this.hamburguerOpen) {
          $('body').css('overflow', 'hidden');
          $(event).animate({
            top: "65vh"
          }, {
            start: () => {
              this.shouldBeOpened = false
            },
            complete: () => {
              this.shouldBeOpened = true
            }
          })
          this.hamburguerOpen = true;
        } else {
          $('body').css('overflow', 'auto');
          $(event).animate({
            top: "100vh"
          }, {
            start: () => {
              this.shouldBeOpened = false
            },
            complete: () => {
              this.shouldBeOpened = true
            }
          });
          this.hamburguerOpen = false;
        } 
      }
    } else {
      console.log("Desktop device detected");
    }
  }
}

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i;
  return regex.test(navigator.userAgent);
}


