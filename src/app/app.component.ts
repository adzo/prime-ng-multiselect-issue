import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {MultiSelect} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {ToggleSwitch} from "primeng/toggleswitch";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button, Dialog, MultiSelect, FormsModule, ToggleSwitch],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prime-ng-multiselect-issue';
  visible: boolean = false;
  rtlEnabled: boolean = false;
  cities: any[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.cities.push({
        code: i,
        name: `City ${i}`
      });
    }
  }

  toggleRTL() {
    const htmlElement = document.documentElement;

    if (this.rtlEnabled) {
      htmlElement.setAttribute("dir", "rtl");
    } else {
      htmlElement.removeAttribute("dir");
    }
  }
}
