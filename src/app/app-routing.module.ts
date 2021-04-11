import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispalyComponent } from './dispaly/dispaly.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: "", component: EditorComponent },
  { path: "get", component: DispalyComponent },
  { path: "home", component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'content/:topic', component: ContentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: ':topicId', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
