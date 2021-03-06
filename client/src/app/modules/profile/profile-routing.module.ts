import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile-resolver.service';

const routes: Routes = [
  {
    path: ':user',
    component: ProfileComponent,
  resolve: {
    user: ProfileResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
