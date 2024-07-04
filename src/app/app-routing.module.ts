import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(
      (m) => m.AdminModule)
    ,
  },
  {
    path: 'publisher', loadChildren: () => import('../app/publisher/publisher.module').then(
      (m) => m.PublisherModule)
  },
  {
    path: 'user', loadChildren: () => import('../app/user/user.module').then(
      (m) => m.UserModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
