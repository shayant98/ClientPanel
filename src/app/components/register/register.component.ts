import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  onSubmit(){
   this.authService.register(this.email,this.password).then(res =>{
    this.flashMessage.show('You are now registerd and logged in', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/'])
   }).catch(err =>{
    this.flashMessage.show(err, {cssClass: 'alert-success', timeout: 4000});
   })
  }
}
