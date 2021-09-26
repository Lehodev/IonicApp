import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [

 {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
    {
      path : 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
    },
    {
      path : 'profile-edit',
      loadChildren: () => import('./profile-edit/profile-edit.module').then(m => m.ProfileEditPageModule)
    },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'appointment-make',
    loadChildren: () => import('./appointment-make/appointment-make.module').then( m => m.AppointmentMakePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'working-hours',
    loadChildren: () => import('./working-hours/working-hours.module').then( m => m.WorkingHoursPageModule)
  },
  {
    path: 'edit-working-hours',
    loadChildren: () => import('./edit-working-hours/edit-working-hours.module').then( m => m.EditWorkingHoursPageModule)
  },
  {
    path: 'working-hours',
    loadChildren: () => import('./working-hours/working-hours.module').then( m => m.WorkingHoursPageModule)
  },
  {
    path: 'appointment-inspect',
    loadChildren: () => import('./appointment-inspect/appointment-inspect.module').then( m => m.AppointmentInspectPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  }


  ]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
