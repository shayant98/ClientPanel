import { Injectable } from '@angular/core';
import { Setting } from "../models/Setting";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Setting = {
    allowRegistration : true,
    disableBalanceOnAdd : true,
    disableBalanceOnEdit : true,
  }
  constructor() { 
    if(localStorage.getItem('settings') != null){
      this.settings = JSON.parse(localStorage.getItem('settings'))
    }
  }
  


  getSettings(): Setting{
    return this.settings
  }

  changeSetting(settings: Setting){
    localStorage.setItem('settings', JSON.stringify(settings))
  }
}
