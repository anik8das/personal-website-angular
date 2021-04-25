import { Component, OnInit } from '@angular/core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;
  faYoutubeSquare = faYoutubeSquare;
  faInstagramSquare = faInstagramSquare;
  faFacebookSquare = faFacebookSquare;
  faEnvelopeSquare = faEnvelopeSquare;
  faTwitterSquare = faTwitterSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
