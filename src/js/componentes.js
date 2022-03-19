
import '../css/componentes.css';
//import webpackLogo from '../assents/img/webpack-logo.png' ///Aqui se importo la imagen y se le puso como referencia 'webpackLogo'

export const saludar = (nombre)=>{
  
    console.log('Creando etiqueta H1');

    const H1= document.createElement('h1');
    H1.innerText= `Hola ${nombre} VIllalba`;

    document.body.append(H1);


    //const img = document.createElement('img'); // se crea la img
    //img.src= webpackLogo; /// se le dice donde se encuentra la imagen// antes ya habiamos creado la referencia de donde estaba la imagen
    //document.body.append(img);// se lo añade al body del html 



}

