import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/Intro/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/Login/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'finger',
    loadChildren: () => import('./pages/Login/finger/finger.module').then( m => m.FingerPageModule)
  },
  {
    path: 'passr',
    loadChildren: () => import('./pages/Login/passr/passr.module').then( m => m.PassrPageModule)
  },
  {
    path: 'vid',
    loadChildren: () => import('./pages/Login/vid/vid.module').then( m => m.VidPageModule)
  },
  {
    path: 'npass',
    loadChildren: () => import('./pages/Login/npass/npass.module').then( m => m.NpassPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/Login/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'residence',
    loadChildren: () => import('./pages/Login/residence/residence.module').then( m => m.ResidencePageModule)
  },
  {
    path: 'reason',
    loadChildren: () => import('./pages/Login/reason/reason.module').then( m => m.ReasonPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/Login/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'vid1',
    loadChildren: () => import('./pages/Login/vid1/vid1.module').then( m => m.Vid1PageModule)
  },
  {
    path: 'face',
    loadChildren: () => import('./pages/Login/face/face.module').then( m => m.FacePageModule)
  },
  {
    path: 'presid',
    loadChildren: () => import('./pages/Login/presid/presid.module').then( m => m.PresidPageModule)
  },
  {
    path: 'ccard',
    loadChildren: () => import('./pages/Login/ccard/ccard.module').then( m => m.CcardPageModule)
  },
  {
    path: 'ncard',
    loadChildren: () => import('./pages/Login/ncard/ncard.module').then( m => m.NcardPageModule)
  },
  {
    path: 'cardinfo',
    loadChildren: () => import('./pages/Login/cardinfo/cardinfo.module').then( m => m.CardinfoPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/Scan/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./pages/Scan/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./pages/Home/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'smoney',
    loadChildren: () => import('./pages/Home/smoney/smoney.module').then( m => m.SmoneyPageModule)
  },
  {
    path: 'tsuccess',
    loadChildren: () => import('./pages/Home/tsuccess/tsuccess.module').then( m => m.TsuccessPageModule)
  },
  {
    path: 'topup',
    loadChildren: () => import('./pages/Home/topup/topup.module').then( m => m.TopupPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./pages/Home/confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/Home/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'afloc',
    loadChildren: () => import('./pages/Home/afloc/afloc.module').then( m => m.AflocPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/Home/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'this',
    loadChildren: () => import('./pages/Home/this/this.module').then( m => m.ThisPageModule)
  },
  {
    path: 'thisd',
    loadChildren: () => import('./pages/Home/thisd/thisd.module').then( m => m.ThisdPageModule)
  },
  {
    path: 'mtopup',
    loadChildren: () => import('./pages/Home/mtopup/mtopup.module').then( m => m.MtopupPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./pages/Home/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'psearch',
    loadChildren: () => import('./pages/Home/psearch/psearch.module').then( m => m.PsearchPageModule)
  },
  {
    path: 'bank',
    loadChildren: () => import('./pages/Activity/bank/bank.module').then( m => m.BankPageModule)
  },
  {
    path: 'ecard',
    loadChildren: () => import('./pages/Card/ecard/ecard.module').then( m => m.EcardPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/Home/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/Profile/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/Profile/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/Profile/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/Profile/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'noti',
    loadChildren: () => import('./pages/Profile/noti/noti.module').then( m => m.NotiPageModule)
  },
  {
    path: 'refer',
    loadChildren: () => import('./pages/Profile/refer/refer.module').then( m => m.ReferPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/Profile/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/Profile/faq/faq.module').then( m => m.FaqPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
