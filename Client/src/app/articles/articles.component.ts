import {Component, OnInit} from '@angular/core';
import {ARTICLES} from '../articles';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  faDoubleArrowLeft = faAngleDoubleLeft;

  Articles = ARTICLES;

  constructor() {
  }

  ngOnInit() {
  }

}
