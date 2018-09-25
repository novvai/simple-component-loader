import {NvComponentLoader} from "./simple-component-loader"
import { e,findIn, createElement } from "./helpers";

class Component{
 
    constructor() {
        this.component = new NvComponentLoader();
        this.template = "";
        this.componentVariables = {};
        this.container = e('[data-bi-location="app"]')
    }

    setContainer(location){
        this.container = e(`[data-bi-location="${location}"]`);
    }

    make() {
        return this.renderContent();
    }

    /** PRIVATE */
   
    renderContent() {
        this.component.load(this.template).then((result) => {
            this.template = result;
            this.makeFromTemplate();
            this.iterateTemplate();
            this.addToContainer();
            this.attachHandlers();
        })
    }

    makeFromTemplate() {
        for (const key in this.componentVariables) {
            this.template = this.template.replace(`@|${key}|@`, this.componentVariables[key]);
        }
        this.template = createElement(this.template);

    }

    iterateTemplate(){
        let iteratebleElements = findIn(this.template, '[data-bi-for]');
        if(iteratebleElements === null){
            return;
        }
        if(iteratebleElements.length == undefined){
            iteratebleElements = [iteratebleElements];
        }
        iteratebleElements.forEach(e=>{
            let tmp = document.createElement("div");
            
            let parent = e.parentNode;
            
            tmp.appendChild(e);

            let cp = tmp.firstChild.innerHTML;
            try{
                this.componentVariables[e.getAttribute('data-bi-for')].forEach(el=>{
                
                    let component = cp;
                    for (const key in el) {
                        component = component.replace(`@|${key}|@`, el[key]);
                    }
    
                    parent.appendChild(createElement(component).firstChild);
                });
            }catch(er){
                console.error(`Template variable has been specified, but no Component variable is provided : ${e.getAttribute('data-bi-for')}`)
            }
           
        })
    }

    attachHandlers() {
        let handlerElements = findIn(this.container, '[data-bi-trigger]');

        if(handlerElements === null){
            return;
        }

        if (handlerElements.length === undefined){
            handlerElements = [handlerElements];
        }

        handlerElements.forEach(handler => {
            const handlerMethod = handler.getAttribute('data-bi-trigger');
            try{
                handler.addEventListener('click', this[handlerMethod].bind(this));
            }catch(e){
                console.error(`The method "${handlerMethod}" that you try to invoke does not exist, you can add such behaviour using .addHandler(handlerName, callback)`);
            }
        });
    }

    addToContainer(){
        this.container.innerHtml = "";
        this.template.childNodes.forEach(node=>{
            this.container.appendChild(node);
        })
    }
}

export default Component