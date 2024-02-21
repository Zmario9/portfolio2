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
  public winTablet: number = 1200;
  public isHamOpen: boolean = false;
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
    //Estableciendo que el background del menú hamburguesa no se active.
    $("#bg-hambmenu").fadeOut(400, ()=>{
      $("#bg-hambmenu").css("display", "none");
    });
    //Moviendo el menú hamburguesa a su posición inicial al iniciar la página.
    if(window.innerWidth < 600){
      $("#navMob").animate({
        bottom: "2%",
        left: `-${$("#navMob").width()}`
      }, 0)
      // console.log("Reseteando cel");
    } else {
      $("#navMob").animate({
        bottom: `-${$("#navMob").height()}`,
        left: "50%"
      }, 0)
    } 
    //Eventos al cambiar el cambiar el tamaño de la pantalla.
    window.addEventListener("resize", (event) => {
      this.hamburguerOpen = false;
      this.currentWinSize = window.innerWidth;
      $('body').css('overflow', 'auto');
      if(window.innerWidth < 600){
        // console.log($("#navMob").width());
        $("#navMob").css("left", `-${$("#navMob").width()}px`);
        $("#navMob").css("bottom", "2%");
      } else {
        $("#navMob").css("left", "50%");
        $("#navMob").css("bottom", `-${$("#navMob").height()}px`);
      }
      this.shouldBeOpened = true
      this.isHamOpen = false;
    });
  }
  //ABRIR MENU HAMBURGUESA
  openHambMenu(event: MouseEvent) {
    let burguer = $("#navMob");
    let burguerWidth = $("#navMob").width();
    let burguerHeight = $("#navMob").height();
    $('body').css('overflow', 'hidden');
    if(window.innerWidth < 600){
      //MOBILES
      if (!this.hamburguerOpen) {
        this.animatedHamburguer(burguer, "left", "0","");
        this.hamburguerOpen = true;
        this.isHamOpen = true;
      } 
    } else {
      //TABLETS
      if (!this.hamburguerOpen) {
        this.animatedHamburguer(burguer, "bottom", "0","50%");
        this.hamburguerOpen = true;
        this.isHamOpen = true;
      }
    }
    $("#bg-hambmenu").fadeIn(400, ()=>{
      $("#bg-hambmenu").css("display", "block");
    });
  }

  //CERRAR MENU HAMBURGUESA
  closeHamburguer(){
    let burguer = $("#navMob"); 
    let bgburguer = $("#bg-hambmenu");
    if(window.innerWidth < 600){
      this.animatedHamburguer(burguer, "left", `-${$("#navMob").width()}`, "");
    } else {
      this.animatedHamburguer(burguer, "bottom", `-${$("#navMob").height()}`, "50%");
    }
    $('body').css('overflow', 'auto');
    $(bgburguer).fadeOut(400, ()=>{
      bgburguer.css("display", "none");
    });
    this.isHamOpen = false;
    this.hamburguerOpen = false;
  }
  
  //MÉTODO PARA LA ANIMACIÓN DEL MENÚ HAMBURGUESA
  animatedHamburguer(element: any, directionHamb: string, value1: string, value2: string){
    if(directionHamb == "left"){
      element.animate({
        left: value1
       }, {
       start: () => {
         this.shouldBeOpened = false;
       },
       complete: () => {
         this.shouldBeOpened = true;
       }
     }); 
    }

    if (directionHamb == "bottom"){
      $(element).animate({
        bottom: value1,
        left: value2
      }, {
        start: () => {
          this.shouldBeOpened = false
        },
        complete: () => {
          this.shouldBeOpened = true
        }
      })
    }
  }
  
  //MÉTODO DE SCROLLAJE
  goTo(place: string) {
    let burguer = $("#navMob");
    this.gotToH2(place);
    this.hamburguerOpen = false;
  }
  
  //MÉTODO QUE COMPLEMENTA AL MÉTODO DE SCROLLAJE
  gotToH2(value: string){
    switch (value){
      case "Inicio": this.scroller.scrollToPosition([0,0]); this.closeHamburguer(); this.isHamOpen = false; break;
      case "Proyectos": this.scroller.scrollToAnchor("thirdContainer"); this.closeHamburguer(); this.isHamOpen = false; break;
      case "Contacto": this.scroller.scrollToAnchor("fifthContainer"); this.closeHamburguer(); this.isHamOpen = false; break;
      case "Referencias": Swal.fire({
        title: "Error",
        text: "Lo siento, aun no esta disponible esta opcion. :(",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      }); break;
    }
  }
  
  
  //MÉTODO PARA IR A MIS REDES SOCIALES.
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

