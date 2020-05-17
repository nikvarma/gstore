import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  showSection: string;
  unsubscribe$: Subject<any> = new Subject();
  constructor(private route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.showSection = data.page;
      this.updateComponent();
    });
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
