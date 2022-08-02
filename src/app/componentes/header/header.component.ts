import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  dataObject: any = "";
  showForm: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle("login").subscribe(value => { this.showForm = value });
   }

  ngOnInit(): void { 
  }

  toggle(){
    this.uiService.toggleBoton("login");
  }
  
}
