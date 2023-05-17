import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Games LOLJA';
  mostrarMenu:boolean= true;

  constructor(private _loginService: LoginService){}
  ngOnDestroy(): void {
    localStorage.clear();
    
  }
  ngOnInit(): void {
   this._loginService.getmostaMenu().subscribe(
    res => {this.mostrarMenu =res;});
  }

}

