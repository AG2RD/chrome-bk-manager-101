import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { concatAll, map, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  @ViewChild('target') child: ElementRef;
  tree$ = new BehaviorSubject<Array<any>>([]);
  tree: string;

  ngOnInit(): void {
    this.getTree()
      .pipe(
        concatAll(),
        map((val: any) => {
          return val.title;
        }),
        toArray(),
        tap((val) => {
          console.log('test', val);
          this.tree$.next(val);
          this.cd.detectChanges();
        }),
      )
      .subscribe();
  }

  getTree(): Observable<any> {
    const mainTree$ = new Subject<any>();
    chrome.bookmarks.getTree((tree: Array<chrome.bookmarks.BookmarkTreeNode>) => {
      mainTree$.next(tree[0].children);
      mainTree$.complete();
    });
    return mainTree$.asObservable();
  }
}
