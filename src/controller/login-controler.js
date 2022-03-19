import '../css/login.css'
import {} from '../'
import login from '../views/login.html' 
export const todo = document.querySelector('#todo');

export default  ()=>{

    const divLogin = document.createElement('div');

    divLogin.innerHTML=login;
    todo.innerHTML='';
    
    return divLogin;
    

}