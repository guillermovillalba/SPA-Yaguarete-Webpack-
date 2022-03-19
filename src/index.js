import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from '../router/index-roter.js';

import {saludar} from './js/Componentes.js'
import './styles.css'


window.addEventListener('hashchange', ()=>{
    router(window.location.hash);
})
