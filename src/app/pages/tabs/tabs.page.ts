import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone:false,
})
export class TabsPage implements OnInit {

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

  selectTab: any;
  @ViewChild('tabs', { static: false })
  tabs!: IonTabs;

  setCurrentTab() {
    this.selectTab = this.tabs.getSelected();
  }

  // getImageSource(): string {
  //   if (this.selectTab === 'activity') {
  //     return '../../../../assets/image/b1f.png';
  //   } else {
  //     if (this.darkMode) {
  //       return '../../../../assets/image/b1d.png';
  //     } else {
  //       return '../../../../assets/image/b1.png';
  //     }
  //   }
  // }

 getImageSource(): string {
  // Dark mode + active
  if (this.darkMode && this.selectTab === 'activity') {
    return 'assets/image/b1d.png';

  // Light mode + active
  } else if (!this.darkMode && this.selectTab === 'activity') {
    return 'assets/image/b1f.png';

  // Dark mode inactive OR light mode inactive
  } else {
    return 'assets/image/b1.png';
  }
}




}
