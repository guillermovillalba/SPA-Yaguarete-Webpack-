
import home from '../src/controller/home-controler.js'  //aqui se importa todo lo del js y se le da un nombre, este caso home
import footer from '../src/controller/footer-controler.js'
import eroor from '../src/controller/404-controler.js'
import login from '../src/controller/login-controler'
import ayuda from '../src/controller/ayuda.js'

const ROOT =document.querySelector('#root');
const foot = document.querySelector('#footer');
export const todo = document.querySelector('#todo');


//rooteo////////////
const router =(route)=>{
    ROOT.innerHTML='';
 switch (route){
     case '#/':
        
        return  ROOT.appendChild(home());
         
    
    
    case '#/ayuda':
        
        
        return ROOT.appendChild(ayuda() ) ;
    
    case '#/login':
       return todo.appendChild(login());
    
       default :
    return ROOT.appendChild( eroor());


 }
};




export{
    router,

}