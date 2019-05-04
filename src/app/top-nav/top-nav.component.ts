import {Component} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent {
  status = false;
  private liststatus: { news: false; contact: false; about: false; home: false };


  clickEvent() {
    this.status = true;

  }

  clickEvent2(val) {
    this.liststatus = {home: false, about: false, contact: false, news: false};
    for (const key in this.liststatus) {
      if (val === key) {
        this.liststatus[key] = true;
        console.log(this.liststatus);
      }
    }
  }

}
