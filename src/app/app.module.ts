import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { QuillModule } from 'ngx-quill'
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from "@angular/material/button";

import { DispalyComponent } from './dispaly/dispaly.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContentComponent } from './content/content.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    DispalyComponent,
    HeaderComponent,
    HomeComponent,
    BlogsComponent,
    ContentComponent,
    SpinnerComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    QuillModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
