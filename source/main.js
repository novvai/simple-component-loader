import {NvComponentLoader} from "./simple-component-loader"
import { e,findIn, createElement } from "./helpers";

class Component{
 
    constructor() {
        this.component = new NvComponentLoader();
        this.template = "";
        this.componentVariables = {};
        this.container = e('[data-bi-location="app"]')
    }
    /**
     * Set custom container if needed
     * 
     * @param {string} location 
     */
    setContainer(location){
        this.container = e(`[data-bi-location="${location}"]`);
    }

    /**
     * Start Execution of the load script
     */
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

    /**
     * Replace all single level template variables and create HTML nodes
     */
    makeFromTemplate() {
        for (const key in this.componentVariables) {
            this.template = this.template.replace(`@|${key}|@`, this.componentVariables[key]);
        }
        this.template = createElement(this.template);

    }

    /**
     * Find elements that are placeholders for iteratable object
     * use the placeholder as template, iterate through all values and fill that template with different values
     * lastly append to the parent object and pass to the template
     */
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

    /**
     * Attach custom behaviour to  elements givin flexability of work
     * Find all elements with data attribute [data-bi-trigger]
     * attach to the element method specified under data-bi-trigger
     * 
     * example : div data-bi-trigger="load"
     * will attach to that div click listener with callback method *load*
     */
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

    /**
     * Clears the content for the container and fills the container with new data
     */
    addToContainer(){
        this.container.innerHTML = "";

        this.template.childNodes.forEach(node=>{
            this.container.appendChild(node);
        })
    }
}

export default Component