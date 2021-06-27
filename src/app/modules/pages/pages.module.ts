import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './components/pages/pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SideMenuComponent } from '../../ui/side-menu/side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../ui/header/header.component';
import { LoaderComponent } from '../../ui/loader/loader.component';

@NgModule({
  declarations: [
    PagesComponent,
    SideMenuComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FontAwesomeModule, RouterModule],
})
export class PagesModule {}
