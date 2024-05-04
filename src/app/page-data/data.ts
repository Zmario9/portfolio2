//Interfaces
var langValue: string = navigator.language;
console.log(`Lenguaje: ${langValue}`);
var arrayHeaderNav: string[];

if(langValue == "es-ES"){
  arrayHeaderNav = ["Inicio", "Proyectos", "Contacto", "Referencias"];
} else {
  arrayHeaderNav = ["Start", "Projects", "Contact", "References"];
}

export interface NameSrc{
  nombre: string;
  src: string;
}
  
export interface ProjectData{
  titulo: string;
  technologies: Array<string>;
  description: string;
  src: string;
  gifSrc: string;
}

export interface IconList{
  nombre: string,
  iconoMenu: string,
  redirectTo: string
}

export interface IconSocialList{
  socialLogo: string,
  link: string
}

//Variables

//Header
export let iconList: IconList[] = [
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
      redirectTo: "quintContainer"
    },
    {
      nombre:"Referencias",
      iconoMenu: "person-circle",
      redirectTo:"fourthContainer"
    }
  ];

export let iconSocialList: IconSocialList[] = [
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

//Main
export let conocimientos: NameSrc[] = [
    {
      nombre:'HTML5',
      src:"assets/images/html.png"
    },
    {
      nombre:'JavaScript',
      src:'assets/images/javascript.png'
    },
    {
      nombre:'CSS',
      src:'assets/images/css.png'
    },
    {
      nombre:'BootStrap',
      src:'assets/images/bootstrap.png'
    },
    {
      nombre:'Git',
      src:'assets/images/git.png'
    },
    {
      nombre:'Jquery',
      src:'assets/images/jquery.png'
    },
    {
      nombre:'TypeScript',
      src:'assets/images/typescript.png',
    },
    {
      nombre:'Ionic',
      src:'assets/images/ionic.png',
    },
    {
      nombre:'Electron',
      src:'assets/images/electron.png'
    },
    {
      nombre:'Angular',
      src:'assets/images/angular.png'
    },
    {
      nombre:'NodeJS',
      src:'assets/images/nodejs.png'
    },
    {
      nombre:'Sass',
      src:'assets/images/sass.png'
    }
];

export let projects: ProjectData[] = [
    {
      titulo: "Building a House",
      technologies:[
        "SCSS", "HTML", "CSS"
      ],
      description: `Un modelo basado en el website de una constructora cuyo objetivo es mantenerte 
                    informado de cómo avanza la construcción de tu hogar, esquema de trabajo, documentos 
                    legales, entre otras cosas.`,
      src: "assets/images/proyectos/buildHouse.PNG",
      gifSrc:"assets/gifs/BuildingAHouse.gif"
    },
    {
      titulo: "Natural Foods",
      technologies:[
        "SCSS", "HTML", "CSS"
      ],
      description: `Un modelo de página web de recetas sobre comidas naturales, el cual posee una simple interfaz
                    Bien decorada con su texto descriptivo, mas botones que te llevan dichas recetas que desees aprender.`,
      src: "assets/images/proyectos/naturalFoods.PNG",
      gifSrc:"assets/gifs/NaturalFoods.gif"
    },
    {
      titulo: "Education Page",
      technologies:[
        "SCSS", "HTML", "CSS"
      ],
      description: `Un modelo de website sobre educación para niños, lleno de bastante estilo que invita invita a los 
                    padres a ser mas responsables y amables con la crianza y educacion de sus hijos.`,
      src: "assets/images/proyectos/EducationPage2.PNG",
      gifSrc:"assets/gifs/EducationBoring.gif"
    },
    {
      titulo: "Prototipo tienda de ventas",
      technologies:[
        "SCSS", "HTML", "CSS", "BOOTSTRAP", "ANGULAR"
      ],
      description: `Un modelo de website que alude a ser un clon de Mercadolibre, al hacer click a un producto para comprar
                    te llevara a la seccion donde se describe el precio especifico y demas del mismo.`,
      src: "assets/images/proyectos/ClonePrototypeShop.PNG",
      gifSrc:"assets/gifs/MercadoLibreClone.gif"
    },
    {
      titulo: "Agencia de Marketing",
      technologies:[
        "CSS", "HTML"
      ],
      description:`Pagina web sobre Marketing Digital, con animaciones smooth, diseño minimalista con colores llenos
                   de vida agradables para la vista, botones con hover animado y buena organización del contenido.`,
      src: "assets/images/proyectos/AgentesWeb.PNG",
      gifSrc:"assets/gifs/AgenciaOK.gif"
    },
    {
      titulo: "Portafolio simple",
      technologies:[
        "CSS", "HTML", "Responsive Design"
      ],
      description: `Portafolio hecho bajo un modelo dado en Cadif1, cuyo propósito era ponernos a prueba sobre cómo
                    Decorar y organizar correctamente el FrontPage, con animaciones de hover.`,
      src: "assets/images/proyectos/Portfolio1Template.PNG",
      gifSrc:"assets/gifs/PortfolioModel.gif"
    },
    {
      titulo: "Modelo 2 de Portafolio",
      technologies:[
        "CSS", "HTML", "Responsive Design"
      ],
      description: `Mi primer modelo de portafolio hecho bajo un modelo dado en Cadif1, decoración minimalista
                    con una simple paleta de colores, texto amigable para la vista, y un buen ajuste de pantalla.`,
      src:"assets/images/proyectos/PortfolioTemplate3.PNG",
      gifSrc:"assets/gifs/PortfolioModel2.gif"
    }
  ];