import {Component, OnInit} from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {EditorInstance, EditorOption} from "angular-markdown-editor";
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from "../Models/post";
import {PostService} from "../Services/post.service";
import {post} from "selenium-webdriver/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  bsEditorInstance: EditorInstance;
  title: string;
  markdownText: string;
  showEditor = true;
  templateForm: FormGroup;
  editorOptions: EditorOption;

  constructor(
    private fb: FormBuilder,
    private markdownService: MarkdownService,
    private postService: PostService,
    private client: HttpClient
  ) {
  }

  ngOnInit() {
    // let token = localStorage.getItem("jwt");
    // this.client.get("http://localhost:5000/api/customers", {
    //   headers: new HttpHeaders({
    //     "Authorization": "Bearer " + token,
    //     "Content-Type": "application/json"
    //   })
    // }).subscribe(response => {
    //   this.customers = response;
    // }, err => {
    //   console.log(err)
    // });

    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: true,
      resize: 'vertical',
      onFullscreenExit: (e) => this.hidePreview(e),
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val),
      onSave: (val) => this.save(val)
    };

    // put the text completely on the left to avoid extra white spaces
    this.markdownText =
      `### Markdown example
---
This is an **example** where we bind a variable to the \`markdown\` component that is also bind to the editor.
#### example.component.ts
\`\`\`javascript
function hello() {
  alert('Hello World');
}
\`\`\`
#### example.component.html
\`\`\`html
<textarea [(ngModel)]="markdown"></textarea>
<markdown [data]="markdown"></markdown>
\`\`\``;

    this.buildForm(this.markdownText);
    this.onFormChanges();
  }


  buildForm(markdownText) {
    this.templateForm = this.fb.group({
      title: [''],
      visible: [true],
      body: [markdownText],
      isPreview: [true]
    });
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  hidePreview(e) {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  showFullScreen(isFullScreen: boolean) {
    if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
      this.bsEditorInstance.showPreview();
      this.bsEditorInstance.setFullscreen(isFullScreen);
    }
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();

    return markedOutput;
  }

  onFormChanges(): void {
    this.templateForm.valueChanges.subscribe(formData => {
      if (formData) {
        this.title = formData.title;
        this.markdownText = formData.body;
      }
    });
  }

  save(val) {
    console.log(val);
    console.log(this.markdownText);

    let post = new Post(this.title,1,this.markdownText,true);

    this.postService.Add(post);
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

}
