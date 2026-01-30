import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
  standalone:false,
})
export class PinPage implements OnInit {

  darkMode = false;

   constructor(public nav:NavController) { }

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

    onCodeChanged(code: string) {

  }
  
  // this called only if user entered full code
  onCodeCompleted(code: string) {
    // this.nav.navigateForward('/tabs/account')
  }

}
