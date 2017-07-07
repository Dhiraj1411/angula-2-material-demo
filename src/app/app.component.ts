import { Component } from '@angular/core';
import {SEARCH_TABS} from "./search-tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs : any;
  constructor(){this.tabs = SEARCH_TABS}
}
