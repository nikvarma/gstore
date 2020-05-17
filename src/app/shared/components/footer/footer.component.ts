import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { commonContent } from 'src/app/dymanic-content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  commonContent = commonContent;
  copyRightYear: number;
  constructor() { }

  ngOnInit() {
        this.copyRightYear = new Date().getFullYear();
  }

}
