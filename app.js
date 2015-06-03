import {Component, View, bootstrap} from "angular2/angular2";


console.log(`log`)

@Component({
	selector: "angularmn-app"
})

@View({
	directives: [],
	template: `<h1>Hello AngularMN!</h1>`
})

class AngularMnApp{

	
}


bootstrap(AngularMnApp);

export default {};