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
  public currentWinSize: number = window.innerWidth;
  public winTablet: number = 992;
  public iconList: any[] = [
    {
      nombre:"Inicio",
      iconoMenu:"home",
    },
    {
      nombre:"Proyectos",
      iconoMenu:"briefcase",
    },
    {
      nombre:"Contacto",
      iconoMenu:"mail",

    },
    {
      nombre:"Referencias",
      iconoMenu: "person-circle",
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
}
