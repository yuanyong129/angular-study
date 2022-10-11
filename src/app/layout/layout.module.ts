import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    SidebarComponent,
    LogoComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
