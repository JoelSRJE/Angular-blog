import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    FooterComponent,
    ListPostsComponent,
    NavbarComponent,
    ViewPostComponent,
    PostComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
