import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { ConfirmModel } from '../../../shared/models/modals/confirmModal';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.scss'],
})
export class InformationModalComponent
  extends SimpleModalComponent<ConfirmModel, boolean>
  implements OnInit, ConfirmModel
{
  public title: string = 'Information';
  public message: string = 'Default message';
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log('app-information-modal init');
  }
}
