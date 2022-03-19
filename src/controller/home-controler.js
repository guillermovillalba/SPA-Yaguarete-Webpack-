import '../css/home.css'
import html from '../views/home.html' 

export default  ()=>{

    const divHome = document.createElement('div');

    divHome.innerHTML=html;
    
    return divHome;
    

}

