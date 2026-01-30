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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
