import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { SettingsService } from '../services/settings.service';
import { retry } from '../../../node_modules/rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(private router: Router, private settingsService: SettingsService) { 
  }

  canActivate(): boolean{
      if(this.settingsService.getSettings().allowRegistration){
        console.log(true);
        return true
       
        
      }else{
        this.router.navigate(['/login'])
        console.log(false);
        return false
        
        
      }
  }
}
