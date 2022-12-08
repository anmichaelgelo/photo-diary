import { koalas } from './koalas.js'
import renderActiveKoala from './koala-active'
import renderKoalaList from './koala-list'

// Called once when the page loads, and again every time a koala is selected
let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}

export default render