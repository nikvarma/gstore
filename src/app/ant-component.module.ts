import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US, NzCarouselModule, NzCardModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {
  AccountBookFill, AlertFill, AlertOutline, VideoCameraFill, UploadOutline, UserOutline,
  LockFill, MenuFoldOutline
} from '@ant-design/icons-angular/icons';
import { SideNavModule } from 'carbon-components-angular';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill, VideoCameraFill, UploadOutline, UserOutline,
  LockFill, MenuFoldOutline
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    SideNavModule,
    NzLayoutModule,
    NzButtonModule,
    NzCarouselModule,
    NgZorroAntdModule
  ],
  exports: [
    NzCardModule,
    NzGridModule,
    NzIconModule,
    SideNavModule,
    NzLayoutModule,
    NzButtonModule,
    NzCarouselModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
})
export class AntComponentModule { }
