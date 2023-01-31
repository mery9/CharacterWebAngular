import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditAvatarComponent } from './edit-avatar/edit-avatar.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'editavatar', component: EditAvatarComponent},
    { path: '**', pathMatch: 'full', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
