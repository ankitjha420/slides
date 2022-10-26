export class Content{

    constructor(el){

        this.DOM = {el: el}

        this.DOM.title = this.DOM.el.querySelector('h2')

        this.DOM.text = this.DOM.el.querySelector('p')

        this.initEvents()

    }

    handleClick(e){
        console.log('did u click?')
    }

    initEvents(){
        this.DOM.title.addEventListener('click', this.handleClick)
    }

}