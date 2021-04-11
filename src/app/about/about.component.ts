import { ContentService } from './../content.service';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  descriptionText:string;
  constructor(content:ContentService) {
    this.descriptionText = content.aboutContent;
   }

  ngOnInit(): void {
  }

}
