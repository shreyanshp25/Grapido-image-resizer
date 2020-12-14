import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("slider")slider: Slides;
  

  constructor(public navCtrl: NavController) {
  }
  enlarge() {
    var element = document.getElementById("img");
    element.style.height = "100%";
    var ele1 = document.getElementById("Close");
    ele1.style.display = "block";
    element.style.transition = "height 0.5s display 0.5s";

  }
  restore(){
    var element = document.getElementById("img");
    element.style.height = "450px";
    var ele1 = document.getElementById("Close");
    ele1.style.display = "none";
    element.style.transition = "height 0.5s display 0.5s";

  }
  

}

