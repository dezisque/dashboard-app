import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faUser,
  faTachometerAlt,
  faCalendarAlt,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public icons = { faBars, faUser, faTachometerAlt, faCalendarAlt, faListUl };
  public opened = false;
  constructor() {}

  ngOnInit(): void {}
}
