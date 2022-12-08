import render from './koala-render'

let activeKoala = null

// Changes the active koala, then re-renders the page to display that koala
let selectKoala = koala => {
    activeKoala = koala
    render()
}

export default selectKoala