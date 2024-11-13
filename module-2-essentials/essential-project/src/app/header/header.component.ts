import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, // if false it will be module based component but recommended is standalone
    // template: '<h1>Hello World</h1>'
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}