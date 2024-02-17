import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import * as $ from 'jquery';
declare var Swal: any;

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component {
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
      redirecTo: "quintContainer"
    },
    {
      nombre:"Referencias",
      iconoMenu: "person-circle",
      redirectTo:"fourthContainer"
    }
  ];
  public iconSocialList: any[] = [
    {
      socialLogo:"logo-github",
      link:"https://github.com/Zmario9"
    },
    {
      socialLogo:"logo-whatsapp",
      link:"https://wa.me/584145306381"
    },
    {
      socialLogo:"logo-discord",
      link:"https://discord.com/channels/@me"
    },
    {
      socialLogo:"logo-linkedin",
      link:"https://www.linkedin.com/in/jose-manuel-correa-castro-69491321a/"
    }
  ];
  ngOnInit(){
    upd();
    window.onresize = upd;
    $("#navMob").animate({
      left: `-${$("#navMob").width()}`
    }, 0)

    window.addEventListener("resize", (event) => {
      this.hamburguerOpen = false;
      this.currentWinSize = window.innerWidth;
      $('body').css('overflow', 'auto');
      if(window.innerWidth < 600){
        $("#navMob").css("left", `-${$("#navMob").width()}px`);
        this.shouldBeOpened = true
      }
    });
  }

  openHambMenu(event: MouseEvent) {
    let burguer = $("#navMob");
    let burguerWidth = $("#navMob").width();
    if(window.innerWidth < 600){
      //MOBILES
      if (!this.hamburguerOpen) {
        $('body').css('overflow', 'hidden');
        burguer.animate({
          left: 0
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
        burguer.animate({
          left: `-${burguerWidth}`
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
    }// else {
    //   //TABLETS
    //   if (!this.hamburguerOpen) {
    //     $('body').css('overflow', 'hidden');
    //     $(event).animate({
    //       top: "65vh"
    //     }, {
    //       start: () => {
    //         this.shouldBeOpened = false
    //       },
    //       complete: () => {
    //         this.shouldBeOpened = true
    //       }
    //     })
    //     this.hamburguerOpen = true;
    //   } else {
    //     $('body').css('overflow', 'auto');
    //     $(event).animate({
    //       top: "100vh"
    //     }, {
    //       start: () => {
    //         this.shouldBeOpened = false
    //       },
    //       complete: () => {
    //         this.shouldBeOpened = true
    //       }
    //     });
    //     this.hamburguerOpen = false;
    //   } 
    // }
  }

  goTo(place: string) {
    let burguer = $("#navMob");
    if(window.innerWidth < 600){
      $('body').css('overflow', 'auto');
      $(burguer).animate({
        left: `-${$("#navMob").width()}`
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
    } //else {
    //   $('body').css('overflow', 'auto');
    //   $(".sidebar").animate({
    //     top: "100vh"
    //   }, {
    //     start: () => {
    //       this.shouldBeOpened = false
    //     },
    //     complete: () => {
    //       this.shouldBeOpened = true
    //     }
    //   });
    //   this.hamburguerOpen = false;
    //   this.gotToH2(place);
    // }
  }

  gotToH2(value: string){
    switch (value){
      case "Inicio": this.scroller.scrollToPosition([0,0]); break;
      case "Proyectos": this.scroller.scrollToAnchor("thirdContainer"); break;
      case "Contacto": this.scroller.scrollToAnchor("fifthContainer"); break;
      case "Referencias": Swal.fire({
        title: "Error",
        text: "Lo siento, aun no esta disponible esta opcion. :(",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      }); break;
    }
  }
  
  socialMedia(url: string, evento: any){
    // console.log(evento.srcElement.name);
    if(evento.srcElement.name != "logo-discord"){  
      window.location.href = url;  
    } else {
      Swal.fire({
        title: "Discord",
        text: "Buscame como 'thelostmagician'.",
        icon: "info",
        confirmButtonColor: "#7142F0",
        confirmButtonText: "Ir a Discord"
      }).then((result: { isConfirmed: any; isDenied: any; }) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = url;      
        }
      });; 
    }
  }
}

function upd() {
  var h: any = $("header").height();
  $(".circle").width(h / 1);
}
