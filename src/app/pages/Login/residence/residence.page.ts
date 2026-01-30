import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.page.html',
  styleUrls: ['./residence.page.scss'],
  standalone: false,
})
export class ResidencePage implements OnInit {

  darkMode = false;

  constructor(private modalcontroller: ModalController) { }

  close() {
    this.modalcontroller.dismiss();
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
