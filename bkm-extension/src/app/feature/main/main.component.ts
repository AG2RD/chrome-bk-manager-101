import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  tree$ = new BehaviorSubject<Array<any>>([]);

  ngOnInit(): void {
    this.getTree()
      .pipe(
        tap((val) => {
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
