import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecard',
  templateUrl: './ecard.page.html',
  styleUrls: ['./ecard.page.scss'],
  standalone:false,
})
export class EcardPage implements OnInit {

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
