import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: any;


  constructor() {}

  ngOnInit() {}

  loveIt() {
    this.post.loveIts +=1;
    console.log(this.post.loveIts);
  }

  notloveIt() {
    this.post.loveIts -=1;
    console.log(this.post.loveIts);
  }

  getColor() {
    if (this.post.loveIts > 0) { return "	#ADFF2F";}
    if (this.post.loveIts < 0) { return "	#F08080";}
  }

}
