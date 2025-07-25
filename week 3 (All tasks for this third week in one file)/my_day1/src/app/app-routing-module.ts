import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Login } from './login/login';
import { authGuard } from './services/auth.guard'; 

const routes: Routes = [
  { path: '', component: Posts, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: 'posts', component: Posts, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 