import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLike: number;

  constructor() { }

  ngOnInit() {

  }


}
