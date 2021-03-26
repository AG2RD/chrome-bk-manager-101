import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  onClick($event): void {
    chrome.tabs.query({ active: true, currentWindow: true }, function ([{ id }]) {
      chrome.tabs.sendMessage(id, { greeting: 'hello' }, function (response) {
        console.log('done');
      });
    });
  }
}
