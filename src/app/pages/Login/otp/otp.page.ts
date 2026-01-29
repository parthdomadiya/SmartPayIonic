import { Component, OnInit } from '@angular/core';
import { NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
  standalone: false,
})
export class OtpPage implements OnInit {

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

   onOtpChange(event: any) {
    console.log(event);
  }

  otpConfig: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 5,
    isPasswordInput: false,
    placeholder: '',
    inputStyles: {
      display: 'flex',
      width: '56px',
      height: '56px',
      borderRadius: '12px',
      color: 'var(--ion-color-txt)',
      fontSize: '20px',
      fontFamily: 'PlusJakartaSans-Bold',
      backgroundColor: 'var(--ion-color-fb)',
    },
    containerStyles: {
      display: 'flex',
    },
    // inputClass: 'each_input',
    // containerClass:'all_input'
  };

}
