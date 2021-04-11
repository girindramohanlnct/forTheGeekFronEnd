import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Content } from './content.model';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  post:Content;
  content;
  title;
  id;
  menu = [];
  isLoading = false;
  pressed = '';
  notFoud = false;

  constructor(private http : HttpClient,private route: ActivatedRoute,
    private contentService: ContentService) {
   }

  ngOnInit(): void {
    let topic;

    this.route.paramMap.subscribe((res) => {
      topic = res['params']['topic'];

    })
  
   this.http.get<{messege: string,contents: Content, allPost: Content[], subTopics: string[]}>("http://localhost:8000/api/getContent/"+ topic).subscribe(res => {
     //this.content = res.contents.content;
     console.log("Mohan ", topic);
     for(let i = 0; i < res.subTopics.length; i++) {
       let menu1: {topic:  string, belowTopic: string[]} = {topic: '', belowTopic:[]};
       console.log(res.subTopics[i]);
       menu1['topic'] = res.subTopics[i];
       console.log("menu1 ", menu1.topic);
      for(let j = 0; j < res.allPost.length; j++) {
        if(menu1['topic'] === res.allPost[j].subTopic) {
          menu1.belowTopic.push(res.allPost[j].title)
        }
      }
      this.menu.push(menu1);
    }
    console.log("menu   ", this.menu);
     console.log(res.contents._id)
     this.id = res.contents._id;
    this.content = res.contents.content;
    this.title = res.contents.title;
    console.log(this.title,this.content);
   }, err => {
     console.log("Error");
    this.notFoud = true;
   })
  }


  getContentByTitle(title:string) {
    // this.content = "<p>Loading........</p>";
    this.pressed =  title;
    this.isLoading = true;
    this.contentService.getContentByTitle(title).subscribe(res => {
      this.post = res.contents;
      this.content = res.contents.content;
      this.isLoading = false;
      console.log("titlr content",res)
    })

  }

}
