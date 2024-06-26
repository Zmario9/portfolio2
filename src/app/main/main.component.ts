import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import * as $ from 'jquery';
//Con esto llamo al script data.ts del modulo de page-data del proyecto.
import * as myData from '../page-data/page-data.module';
//SweetAlert typeof para que no requiera el uso de any
import Swal, {SweetAlertOptions} from 'sweetalert2';
declare var grecaptcha: any;
var siteToken: string = '6LfS1OopAAAAAJtXkfQoKFZBhA-k5dtU4p4xEkRD';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  mainElement: JQuery<HTMLElement> = $("main");
  conocimientos: myData.NameSrc[] = myData.conocimientos;
  projects: myData.ProjectData[] = myData.projects;
  firstContainerTxt: string[] = myData.firstContainerTxt;
  secondContainerTxt: string[] = myData.secondContainerTxt;
  thirdContTxt: string = myData.thirdContainerH2;
  prevText: string = myData.previewTxt;
  fifthContH2: string = myData.fifthContainerH2;
  fifthContTxt: string[] = myData.fifthContainerText;
  formSendText: string = myData.formSendTxt;

  constructor(private modalService: MdbModalService, private router: Router) {}
  ngOnInit(){
    this.mainElement = $("main");
    // console.log(myData.dataAlgo)
    if(window.innerWidth > 1200){
      //console.log(this.mainElement.height());
      //console.log($("header").height());
      this.mainElement.css("margin-top", `${$("header").height()}px`);
    } else {
      this.mainElement.css("margin-top", `0`);    
    }
    $("#formPortfolio").on('submit', handleSubmit);
    window.addEventListener('scroll', ()=>{
      if(window.innerHeight < 900){
        reveal();
      }
    });
    window.addEventListener("resize", ()=>{
      if(window.innerWidth > 1200){
        this.mainElement.css("margin-top", `${$("header").height()}px`);
      } else {
        this.mainElement.css("margin-top", `0`);    
      }
    })
    try{
      grecaptcha.render("recaptchaSec", {
        sitekey: siteToken,
        callback: function () {
            console.log('recaptcha callback');
        }
      });
    } catch (e){
      console.log("Atrapao!");
    }
  }
  openModalProjects(object: myData.ProjectData){
    const eventAlt = object.gifSrc;
    let titleProject = object.titulo;
    // console.log(titleProject);
    this.modalRef = this.modalService.open(ModalComponent,{
      data:{
        name: titleProject,
        gif: eventAlt
      },
      //centra el modal
      modalClass: 'modal-dialog-centered modal-lg'
    });
  }
}

async function handleSubmit(this: HTMLFormElement, event: Event){
  event.preventDefault();
  const captchaResponse = grecaptcha.getResponse();
  if(!captchaResponse){
    Swal.fire({
      title: "Error...",
      text: "Por favor confirma que no eres un robot.",
      icon: "error",
      timer: 3000,
      showConfirmButton: false
    })
    return;
  }
  const form = new FormData(this);
  // console.log("funciona");
  fetch(this.action,{
    method: this.method,
    body: form,
    headers: {
      'Accept':'application/json'
    }
  });
  if(Response){
    Swal.fire({
      title: "Enviado!",
      text: "Muchas gracias!, tu mensaje ha sido enviado con éxito!",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      title: "Error...",
      text: "Oww, algo salio mal al enviar tu mensaje, por favor intenta de nuevo.",
      icon: "error",
      timer: 3000,
      showConfirmButton: false,
    });
  }
 grecaptcha.reset();
 this.reset();
}
function reveal(){
  var container: JQuery<HTMLElement> = $(".knowledges");
  var projectsContainer: JQuery<HTMLElement> = $(".projects");
  for(let i=0; i<container.length; i++){
    let windowheight = window.innerHeight;
    let revealtop = container[i].getBoundingClientRect().top;
    let revealpoint = -210;
    if(revealtop < windowheight - revealpoint){
      $(container[i]).addClass(`knowledgesActive-${i+1}`);
    }
  }

  for(let j=0; j<projectsContainer.length; j++){
    let windowheight = window.innerHeight;
    let revealtop = projectsContainer[j].getBoundingClientRect().top;
    let revealpoint = -90;
    if(revealtop < windowheight - revealpoint){
      $(projectsContainer[j]).addClass(`projectsActive-${j+1}`);
    }
  }
}
