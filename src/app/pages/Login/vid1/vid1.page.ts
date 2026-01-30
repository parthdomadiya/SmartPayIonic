import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vid1',
  templateUrl: './vid1.page.html',
  styleUrls: ['./vid1.page.scss'],
  standalone: false,
})
export class Vid1Page implements OnInit {

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
