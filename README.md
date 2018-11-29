# Simple Component Loader

Easy to use Component loader for single page applications or just a template prepopulation

## Usage
Create Class that implements *Component*
```javascript
	class ExampleComponent extends Component {
    	constructor(){
        ...
        }
    }
```
Constructor variables
```javascript
this.meta = {
            title: "",
            description: "",
            keywords: ""
        };
this.template = "";
this.componentVariables = {};
```
Template - relative path to the template file on the server
ComponentVariables - json with specified key value pairs corelating to template variables
## Public API

#### Set Container
used to specify where should the component be rendered
.setContainer(location)
```javascript
	let example = new ExampleComponent();
	example.setContainer("app");
```
location - string - this string is going to be searched inside the parent element with selector
*Example : data-bi-location="app" *
## Internal API
 make() - replaces the variables from the template with the json variables from this.componentVariables;
***
loaded() - abstract method that is going to be invoked after the component is rendered on the page;
***
attachHandlers() - goes through the template and adds custom events on elements specified by custom data attribute, data-bi-trigget="methodName"; 
***