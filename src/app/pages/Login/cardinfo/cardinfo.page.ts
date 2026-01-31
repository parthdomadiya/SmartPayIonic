import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.page.html',
  styleUrls: ['./cardinfo.page.scss'],
  standalone:false,
})
export class CardinfoPage implements OnInit {

  darkMode = false;

 constructor(private modal: ModalController,private rou:Router) { }

  close() {
    this.modal.dismiss();
    this.rou.navigate(['./tabs'])
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
