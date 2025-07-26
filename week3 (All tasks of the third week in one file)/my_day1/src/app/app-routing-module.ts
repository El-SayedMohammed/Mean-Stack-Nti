import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Login } from './login/login';
import { authguard } from './services/auth.guard';

const routes: Routes = [
  {path:'',
  component:Posts
},
  {path:'login',component:Login},

  {path:'posts',
    component:Posts
    // canActivate:[authguard]
   },
  // {path:'**',redirectTo:'not found'},// component
  //  {path:'**',component:notfuond}  ///component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
