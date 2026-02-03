import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thisd',
  templateUrl: './thisd.page.html',
  styleUrls: ['./thisd.page.scss'],
  standalone:false,
})
export class ThisdPage implements OnInit {

   darkMode = false;

  constructor() { }

  ngOnInit(): void {
    this.checkAppMode();
  }

  async checkAppMode() {
    const checkIsDarkMode = localStorage.getItem('darkModeActivated');
    // const checkIsDarkMode = await Preferences.get({key: 'darkModeActivated'});
    console.log(checkIsDarkMode);
    checkIsDarkMode == 'true'
      ? (this.darkMode = true)
      : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }

}
