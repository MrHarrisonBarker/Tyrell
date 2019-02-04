import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Tyrell';

  theme: string;

  ngOnInit() {
    localStorage.setItem('theme', 'dark');
    this.theme = localStorage.getItem('theme');
    console.log(this.theme);
  }

  ToggleTheme() {
    if (this.theme === 'light') {this.theme = 'dark'} else {this.theme = 'light'}
    localStorage.setItem('theme',this.theme)
  }
}
