import { Component, OnInit } from '@angular/core';

@Component({ //a classe NavComponent passa a ser um componente a partir do momento que ela tem o @Component que é o decorator
  selector: 'app-nav', //é a tag, que possibilita fazer a referência no component.html
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
