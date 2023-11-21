import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Create', component: CreatePostComponent },
  { path: 'View/:id', component: ViewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
