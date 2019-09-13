import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild("iframe1") iframe1: ElementRef;
  ngOnInit() {
    this.iframe1.nativeElement.contentWindow.postMessage("hi_from_parent_8888","*");
  } 
}
