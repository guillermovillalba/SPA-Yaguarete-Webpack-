import '../css/footer.css';
import footer from '../views/footer.html'

export default  ()=>{

    const divFooter = document.createElement('div');

    divFooter.innerHTML=footer;
    
    return divFooter;
    

}
