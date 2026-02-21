import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-face',
  templateUrl: './face.page.html',
  styleUrls: ['./face.page.scss'],
  standalone: false,
})
export class FacePage implements OnInit {

  darkMode = false;

  constructor(public nav: NavController) {
    setTimeout(() => {
      this.nav.navigateForward('/presid')
    }, 3000);
  }

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
