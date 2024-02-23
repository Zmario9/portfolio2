import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import * as myData from '../page-data/page-data.module';
import * as $ from 'jquery';
import Swal, {SweetAlertOptions} from 'sweetalert2';

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
  public iconList: myData.IconList[] = myData.iconList; 
  public iconSocialList: myData.IconSocialList[] = myData.iconSocialList;

  ngOnInit(){
    upd();
    window.onresize = upd;
    //Estableciendo que el background del menú hamburguesa no se active.
    $("#bg-hambmenu").fadeOut(400, ()=>{
      $("#bg-hambmenu").css("display", "none");
    });
    //Moviendo el menú hamburguesa a su posición inicial al iniciar la página.
    if(window.innerWidth < 600){
      $("#navMob").css({
        bottom: "2%",
        left: `-${$("#navMob").width()}px`
      })
      // console.log("Reseteando cel");
    } else {
      $("#navMob").css({
        bottom: `-${$("#navMob").height()}px`,
        left: "50%"
      })
    } 
    //Eventos al cambiar el cambiar el tamaño de la pantalla.
    window.addEventListener("resize", (event) => {
      this.hamburguerOpen = false;
      this.currentWinSize = window.innerWidth;
      $('body').css('overflow', 'auto');
      if(window.innerWidth < 600){
        $("#navMob").css({
          bottom: "2%",
          left: `-${$("#navMob").width()}px`
        })
      } else {
        $("#navMob").css({
          bottom: `-${$("#navMob").height()}px`,
          left: "50%"
        })
      }
      $("#bg-hambmenu").fadeOut(400, ()=>{
        $("#bg-hambmenu").css("display", "none");
      });
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
        this.animatedHamburguer(burguer, "left", "2%","0");
      } 
    } else {
      //TABLETS
      if (!this.hamburguerOpen) {
        this.animatedHamburguer(burguer, "bottom", "0","50%");

      }
    }
    this.hamburguerOpen = true;
    this.isHamOpen = true;
    $("#bg-hambmenu").fadeIn(400, ()=>{
      $("#bg-hambmenu").css("display", "block");
    });
  }

  //CERRAR MENU HAMBURGUESA
  closeHamburguer(){
    let burguer = $("#navMob"); 
    let bgburguer = $("#bg-hambmenu");
    if(window.innerWidth < 600){
      this.animatedHamburguer(burguer, "left", "2%", `-${$("#navMob").width()}`);
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
  animatedHamburguer(element: JQuery<HTMLElement>, directionHamb: string, value1: string, value2: string){
    if(directionHamb == "left"){
      element.animate({
        bottom: value1,
        left: value2
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
      element.animate({
        bottom: value1,
        left: value2
      }, {
        start: () => {
          this.shouldBeOpened = false
        },
        complete: () => {
          this.shouldBeOpened = true
        }
      });
    }
  }
  
  //MÉTODO DE SCROLLAJE
  goTo(place: string) {
    let burguer = $("#navMob");
    this.gotToH2(place);
    this.hamburguerOpen = false;
  }
  
  //MÉTODO QUE COMPLEMENTA AL MÉTODO DE SCROLLAJE
  gotToH2(value: Array<number>|string){
    switch (value){
      case "Inicio": this.scrollingTo([0,0]); break;
      case "Proyectos": this.scrollingTo("thirdContainer"); break;
      case "Contacto": this.scrollingTo("fifthContainer"); break;
      case "Referencias": Swal.fire({
        title: "Error",
        text: "Lo siento, aun no esta disponible esta opcion. :(",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      }); break;
    }
  }

  scrollingTo(value: [number, number] | string){
    if (typeof value == 'string'){
      this.scroller.scrollToAnchor(value); 
    } else {
      this.scroller.scrollToPosition(value); 
    }
    this.closeHamburguer();
    this.isHamOpen = false;
  }
  
  
  //MÉTODO PARA IR A MIS REDES SOCIALES.
  socialMedia(url: string, evento: MouseEvent){
    const targetElement = evento.target as HTMLElement;
    if(targetElement.getAttribute('name') != "logo-discord"){  
      window.location.href = url;  
    } else {
      Swal.fire({
        title: "Discord",
        text: "Buscame como 'thelostmagician'.",
        icon: "info",
        confirmButtonColor: "#7142F0",
        confirmButtonText: "Ir a Discord"
      }).then((result: { isConfirmed: boolean; isDenied: boolean; }) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = url;      
        }
      });; 
    }
  }
}

function upd() {
  var h: number | undefined = $("header").height();
  if (h !== undefined) {
    $(".circle").width(h / 1); 
  }
}

