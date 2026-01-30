import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.page.html',
  styleUrls: ['./reason.page.scss'],
  standalone:false,
})
export class ReasonPage implements OnInit {

  darkMode = false;

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
