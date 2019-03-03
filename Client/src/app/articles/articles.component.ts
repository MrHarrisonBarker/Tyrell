import {Component, OnInit} from '@angular/core';
import {ARTICLES} from '../articles';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { BOOKS } from '../books';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  faDoubleArrowLeft = faAngleDoubleLeft;

  Articles = ARTICLES;
  Books = BOOKS;

  constructor() {
  }

  ngOnInit() {
  }

}
