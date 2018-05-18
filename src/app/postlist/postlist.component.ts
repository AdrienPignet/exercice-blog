import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts = [
    {
      title: "Premier article",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum sit amet tortor at dignissim. Cras auctor eros at nisl accumsan, at efficitur purus mattis.",
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: "Deuxième article",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum sit amet tortor at dignissim. Cras auctor eros at nisl accumsan, at efficitur purus mattis.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Troixième article",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum sit amet tortor at dignissim. Cras auctor eros at nisl accumsan, at efficitur purus mattis.",
      loveIts: 0,
      created_at: new Date()
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
