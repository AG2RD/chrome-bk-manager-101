import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  port: any;
  constructor() {
    console.log('connect');
    this.port = chrome.runtime.connect();
  }
  ngOnInit(): void {
    debugger;

    this.port.postMessage('test');
  }
}
