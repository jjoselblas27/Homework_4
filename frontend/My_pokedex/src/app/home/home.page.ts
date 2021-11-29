import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  PokemonImagen: any = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F5741%2Fa992a3dcea39c216c8b65e037c315a381dd24456_hq.jpg';

  constructor() { }

  ngOnInit() {
  }

}
