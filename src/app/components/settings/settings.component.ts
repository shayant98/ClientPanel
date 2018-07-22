import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { Setting } from '../../models/Setting';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Setting;

  constructor(
    private settingsService: SettingsService, 
    private flashMessage: FlashMessagesService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings()
  }

  onSubmit(){
    this.settingsService.changeSetting(this.settings);
    this.flashMessage.show('Settings Updated', {cssClass: 'alert-success', timeout: 4000})
  }

}
