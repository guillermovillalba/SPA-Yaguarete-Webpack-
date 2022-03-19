import '../css/ayuda.css'
import ayuda from '../views/ayuda.html' 

export default  ()=>{

    const divAyuda = document.createElement('div');

    divAyuda.innerHTML=ayuda;
    
    return divAyuda;
    

}
