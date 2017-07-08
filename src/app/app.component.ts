import { Component } from '@angular/core';
import {SEARCH_TABS} from "./search-tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs : any;
  fontList: number[]= [10, 12, 13, 14, 15];
  countryCode = ['EST', 'GMT', 'PST'];
  constructor(){this.tabs = SEARCH_TABS}
}
