import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: any;
  
  constructor() { }

  ngOnInit() {

  }

}
