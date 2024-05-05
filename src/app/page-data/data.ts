//BROWSER LANGUAGE DEFINER
var langValue: string = navigator.language;
//console.log(`Lenguaje: ${langValue}`);
//HEADER TRANSLATION
export var arrayHeaderNav: string[];
export var errorMessage: string;
export var discordMsg: string[];

//MAIN TRANSLATION
export var firstContainerTxt: string[];
export var secondContainerTxt: string[];
export var thirdContainerH2: string;
export var projectsDescTxt: string[];
export var projectTitleTxt: string[];
export var previewTxt: string;
export var fifthContainerH2: string;
export var fifthContainerText: string[];
//MODAL TRANSLATION

export var modalTxt: string[];

if (langValue == "es-ES") {
  //HEADER
  arrayHeaderNav = ["Inicio", "Proyectos", "Contacto", "Referencias"];
  errorMessage = "Lo siento, aun no esta disponible esta opcion. :(";
  discordMsg = ["Buscame como 'thelostmagician'.", "Ir a Discord"];
  //MAIN
  firstContainerTxt = ["Desarrollador Junior FrontEnd.", "Sobre mí",
    `
   ¡Hola!, soy Magus, y soy 
   un desarrollador FrontEnd con conocimiento de 
   varias tecnologias que pueden hacerme capaz de maquetar y 
   decorar páginas web en base a las necesidades del cliente.
   (Yyyyy tambien me encanta los videojuegos, ver series y cosas asi).
  `,
    "Cualidades",
    `
   Siempre dispuesto a trabajar en equipo, abierto a críticas con 
   el único propósito de mejorar mi manera de trabajar y cómo dar 
   soluciones a distintos problemas que se presenten durante el 
   desarrollo de algún proyecto dado.
  `];
  secondContainerTxt = ["Tecnologias conocidas"];
  thirdContainerH2 = "Proyectos";
  projectTitleTxt = ["Construyendo una casa", "Comidas naturales", "Página educacional", "Clon de mercadolibre", "Marketing Digital", "Portafolio simple", "Modelo 2 de portfolio"];
  projectsDescTxt = [
    `
     Un modelo basado en el website de una constructora cuyo objetivo es mantenerte 
     informado de cómo avanza la construcción de tu hogar, esquema de trabajo, documentos 
     legales, entre otras cosas.
    `,
    `
     Un modelo de página web de recetas sobre comidas naturales, el cual posee una simple interfaz
     bien decorada con su texto descriptivo, mas botones que te llevan dichas recetas que desees aprender.
    `,
    `
     Un modelo de website sobre educación para niños, lleno de bastante estilo que invita invita a los 
     padres a ser mas responsables y amables con la crianza y educacion de sus hijos.
    `,
    `
     Un modelo de website que alude a ser un clon de Mercadolibre, al hacer click a un producto para comprar
     te llevara a la seccion donde se describe el precio especifico y demas del mismo.
    `,
    `
     Una pagina web sobre Marketing Digital, con animaciones smooth, diseño minimalista con colores llenos
     de vida agradables para la vista, botones con hover animado y buena organización del contenido.
    `,
    `
     Portafolio hecho bajo un modelo dado en Cadif1, cuyo propósito era ponernos a prueba sobre cómo
     Decorar y organizar correctamente el FrontPage, con animaciones de hover.
    `,
    `
     Mi primer modelo de portafolio hecho bajo un modelo dado en Cadif1, decoración minimalista
     con una simple paleta de colores, texto amigable para la vista, y un buen ajuste de pantalla.
    `
  ];
  //MODAL
  previewTxt = "Vista previa";
  modalTxt = ["Te interesa hacer un sitio como este?", "¡Contáctame!"];
  //MAIN FIFTH CONTAINER
  fifthContainerH2 = "Contacto"; 
  fifthContainerText = [
    "¿Tienes alguna propuesta, pregunta o solo quieres opinar sobre mi portafolio?",
    "¡Adelante!",
    "Nombre",
    "Correo",
    "correodealguienmas@gmail.com",
    "Hola!, me gustaria trabajar contigo para un proyecto..."
  ];
} else {
  arrayHeaderNav = ["Home", "Projects", "Contact", "References"];
  errorMessage = "Sorry, this option is not available yet :(";
  discordMsg = ["Look me up as 'thelostmagician'.", "Go to Discord"];
  firstContainerTxt = ["FrontEnd Junior Developer.", "About me",
    `
   Hi, I'm Magus, and I am a FrontEnd developer with knowledge of
   many technologies that can make me capable of crafting and
   decorating web pages in base to the needs of the client. (Aaaaand
   i love videogames, watching series and stuff)
  `,
    "Qualities",
    `
   Always willing to work in a team, open to criticism with the
   sole purpose of improving my work and being able to solve
   problems with different projects. 
  `];
  secondContainerTxt = ["Known technologies"];
  thirdContainerH2 = "Projects";
  projectTitleTxt = ["Building a House", "Natural Foods", "Education Page", "Mercadolibre Clone", "Digital Marketing", "Simple portfolio", "Model 2 portfolio"];
  projectsDescTxt = [
    `
     A model based on the website of a construction company whose objective is to keep you
     informed about how the construction of your home is progressing, work plan, legal
     docs, among other things.
    `,
    `
     A model of a website on recipes about food, which has a simple interface
     decorated with its description text, more buttons that lead to the recipes that you want to learn.
    `,
    `
     A model of a website on education for young people, filled with quite style that invites
     parents to be more responsible and kind with their children's education.
    `,
    `
     A model of a website that refers to being a clone of Mercadolibre, by clicking on a project
     you will be taken to the section where the price is described and other details of the same.
    `,
    `
     A website about digital marketing, with smooth animations, minimalistic design with colors
     full of life that are beautiful for the view, buttons with hover animation and good organization of
     the content.
    `,
    `
     Portfolio done under a given model given in Cadif1, whose purpose was to test me on how to
     decorate and organize correctly the FrontPage, with hover animations.
    `,
    `
     My first portfolio done under a given model given in Cadif1, minimalistic design with
     a simple palette of colors, friendly text for the view, and an even adjustment of the screen.
    `
  ];
  previewTxt = "Preview";
  modalTxt = ["Do you want to make a website like this?", "Contact me!"];
  fifthContainerH2 = "Contact";
  fifthContainerText = [
    "Do you have any proposal, question or just want to make an opinion about my portfolio?", "Go ahead!",
    "Name",
    "Email",
    "someoneelse@gmail.com",
    "Howdy!, I would like to work with you for a project..."
  ];
}
//Interfaces
export interface NameSrc {
  nombre: string;
  src: string;
}

export interface ProjectData {
  titulo: string;
  technologies: Array<string>;
  description: string;
  src: string;
  gifSrc: string;
}

export interface IconList {
  nombre: string,
  iconoMenu: string,
  redirectTo: string
}

export interface IconSocialList {
  socialLogo: string,
  link: string
}

//Variables

//Header
export let iconList: IconList[] = [
  {
    nombre: arrayHeaderNav[0],
    iconoMenu: "home",
    redirectTo: ""
  },
  {
    nombre: arrayHeaderNav[1],
    iconoMenu: "briefcase",
    redirectTo: "projectsIndex"
  },
  {
    nombre: arrayHeaderNav[2],
    iconoMenu: "mail",
    redirectTo: "quintContainer"
  },
  {
    nombre: arrayHeaderNav[3],
    iconoMenu: "person-circle",
    redirectTo: "fourthContainer"
  }
];

export let iconSocialList: IconSocialList[] = [
  {
    socialLogo: "logo-github",
    link: "https://github.com/Zmario9"
  },
  {
    socialLogo: "logo-whatsapp",
    link: "https://wa.me/584145306381"
  },
  {
    socialLogo: "logo-discord",
    link: "https://discord.com/channels/@me"
  },
  {
    socialLogo: "logo-linkedin",
    link: "https://www.linkedin.com/in/jose-manuel-correa-castro-69491321a/"
  }
];

//Main
export let conocimientos: NameSrc[] = [
  {
    nombre: 'HTML5',
    src: "assets/images/html.png"
  },
  {
    nombre: 'JavaScript',
    src: 'assets/images/javascript.png'
  },
  {
    nombre: 'CSS',
    src: 'assets/images/css.png'
  },
  {
    nombre: 'BootStrap',
    src: 'assets/images/bootstrap.png'
  },
  {
    nombre: 'Git',
    src: 'assets/images/git.png'
  },
  {
    nombre: 'Jquery',
    src: 'assets/images/jquery.png'
  },
  {
    nombre: 'TypeScript',
    src: 'assets/images/typescript.png',
  },
  {
    nombre: 'Ionic',
    src: 'assets/images/ionic.png',
  },
  {
    nombre: 'Electron',
    src: 'assets/images/electron.png'
  },
  {
    nombre: 'Angular',
    src: 'assets/images/angular.png'
  },
  {
    nombre: 'NodeJS',
    src: 'assets/images/nodejs.png'
  },
  {
    nombre: 'Sass',
    src: 'assets/images/sass.png'
  }
];

export let projects: ProjectData[] = [
  {
    titulo: projectTitleTxt[0],
    technologies: [
      "SCSS", "HTML", "CSS"
    ],
    description: projectsDescTxt[0],
    src: "assets/images/proyectos/buildHouse.PNG",
    gifSrc: "assets/gifs/BuildingAHouse.gif"
  },
  {
    titulo: projectTitleTxt[1],
    technologies: [
      "SCSS", "HTML", "CSS"
    ],
    description: projectsDescTxt[1],
    src: "assets/images/proyectos/naturalFoods.PNG",
    gifSrc: "assets/gifs/NaturalFoods.gif"
  },
  {
    titulo: projectTitleTxt[2],
    technologies: [
      "SCSS", "HTML", "CSS"
    ],
    description: projectsDescTxt[2],
    src: "assets/images/proyectos/EducationPage2.PNG",
    gifSrc: "assets/gifs/EducationBoring.gif"
  },
  {
    titulo: projectTitleTxt[3],
    technologies: [
      "SCSS", "HTML", "CSS", "BOOTSTRAP", "ANGULAR"
    ],
    description: projectsDescTxt[3],
    src: "assets/images/proyectos/ClonePrototypeShop.PNG",
    gifSrc: "assets/gifs/MercadoLibreClone.gif"
  },
  {
    titulo: projectTitleTxt[4],
    technologies: [
      "CSS", "HTML"
    ],
    description: projectsDescTxt[4],
    src: "assets/images/proyectos/AgentesWeb.PNG",
    gifSrc: "assets/gifs/AgenciaOK.gif"
  },
  {
    titulo: projectTitleTxt[5],
    technologies: [
      "CSS", "HTML", "Responsive Design"
    ],
    description: projectsDescTxt[5],
    src: "assets/images/proyectos/Portfolio1Template.PNG",
    gifSrc: "assets/gifs/PortfolioModel.gif"
  },
  {
    titulo: projectTitleTxt[6],
    technologies: [
      "CSS", "HTML", "Responsive Design"
    ],
    description: projectsDescTxt[6],
    src: "assets/images/proyectos/PortfolioTemplate3.PNG",
    gifSrc: "assets/gifs/PortfolioModel2.gif"
  }
];