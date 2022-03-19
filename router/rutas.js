
import home from '../src/controller/home-controler.js'  //aqui se importa todo lo del js y se le da un nombre, este caso home
import footer from '../src/controller/footer-controler.js'
import eroor from '../src/controller/404-controler.js'
import login from '../src/controller/login-controler'



 const pages ={
home : home,
footer: footer,
eroor:eroor,
login:login,
}

export default{
    pages
}