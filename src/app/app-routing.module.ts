import { NgModule } from '@angular/core';
import { AnimalComponent } from './animal/animal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"animals",
    component: AnimalComponent
  },
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path:"",
    redirectTo: "/homepage",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

