import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presid',
  templateUrl: './presid.page.html',
  styleUrls: ['./presid.page.scss'],
  standalone:false,
})
export class PresidPage implements OnInit {

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
