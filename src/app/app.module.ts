import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgParticlesModule } from 'ng-particles';

import { FeatherModule } from 'angular-feather';
import {
  Github,
  ArrowLeftCircle,
  ArrowUp,
  ArrowDown,
  Frown,
  Smile,
} from 'angular-feather/icons';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LocalService } from './local.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostComponent } from './post/post.component';

const icons = {
  Github,
  ArrowLeftCircle,
  ArrowDown,
  ArrowUp,
  Frown,
  Smile,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    ListPostsComponent,
    CreatePostComponent,
    ViewPostComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons),
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    ToastrModule.forRoot(),
  ],
  exports: [FeatherModule],
  providers: [LocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
