import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public hamburguerOpen: boolean = false;
  public shouldBeOpened: boolean = true;
  public currentWinSize: number = window.innerWidth;
  public winTablet: number = 992;
  constructor(private scroller: ViewportScroller ){

  }
  public iconList: any[] = [
    {
      nombre:"Inicio",
      iconoMenu:"home",
      redirectTo: ""
    },
    {
      nombre:"Proyectos",
      iconoMenu:"briefcase",
      redirectTo: "projectsIndex"
    },
    {
      nombre:"Contacto",
      iconoMenu:"mail",
      redirecto: "quintContainer"
    },
    {
      nombre:"Referencias",
      iconoMenu: "person-circle",
      redirectTo:"fourthContainer"
    }
  ];
  public iconSocialList: any[] = [
    {
      socialLogo:"logo-github"
    },
    {
      socialLogo:"logo-whatsapp"
    },
    {
      socialLogo:"logo-discord",
    },
    {
      socialLogo:"logo-linkedin"
    }
  ];
  ngOnInit(){
    window.addEventListener("resize", (event) => {
      this.hamburguerOpen = false;
      this.currentWinSize = window.innerWidth;
      $('body').css('overflow', 'auto');
      if(window.innerWidth < 600){
        $('.sidebar').css({
          "right": "100vw",
          "top": "10vh",
          "left": ''
        });
      } else {
        //tablets
        $('.sidebar').css({
          "top": "100vh",
          "right": "0",
          "left": "0"
        });
      }
      if (window.innerHeight < 691){
        $(".sidebar").css("display", "none");
      }
       else {
        $(".sidebar").css("display", "flex"); 
       }
    });
  }

  openHambMenu(event: string) {
    $(".sidebar").css("display", "flex"); 
    if(window.innerWidth < 600){
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
  }
  goTo(place: string) {
    if(window.innerWidth < 600){
      $('body').css('overflow', 'auto');
      $(".sidebar").animate({
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
      this.gotToH2(place);
    } else {
      $('body').css('overflow', 'auto');
      $(".sidebar").animate({
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
      this.gotToH2(place);
    }
  }

  gotToH2(value: string){
    switch (value){
      case "Inicio": this.scroller.scrollToPosition([0,0]); break;
      case "Proyectos": this.scroller.scrollToAnchor("thirdContainer"); break;
      case "Contacto": this.scroller.scrollToAnchor("fifthContainer"); break;
      // case "Referencias": 
    }
  }
}





