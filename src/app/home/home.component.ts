import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './Servicio/home-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private servicioHome: HomeServiceService
  ) { }

  ngOnInit() {
    this.servicioHome.getAll().subscribe(
      (resp) => {
        console.log(resp);
      }
    );
  }

}
