import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvatarPartPageComponent } from './avatar-part-page/avatar-part-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { EditAvatarComponent } from './edit-avatar/edit-avatar.component';
import { EditDescriptionPageComponent } from './edit-description-page/edit-description-page.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'editavatar', component: EditAvatarComponent},
    { path: 'editdescription', component: EditDescriptionPageComponent},
    { path: 'search/:searchTerm', component: HomepageComponent },
    { path: 'avatarparts/:id', component: AvatarPartPageComponent},
    { path: 'cart-page', component: CartPageComponent },
    { path: 'tag/:tag', component: HomepageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: '**', pathMatch: 'full', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
