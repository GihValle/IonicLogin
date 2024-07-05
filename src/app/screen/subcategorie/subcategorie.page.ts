import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategorie',
  templateUrl: './subcategorie.page.html',
  styleUrls: ['./subcategorie.page.scss'],
})
export class SubcategoriePage {

  subcategorias = [
    { nome: 'Moletom', img: 'assets/icon/moletom.png' },
    { nome: 'Camiseta', img: 'assets/icon/camiseta.png' },
    { nome: 'Regata', img: 'assets/icon/regata.png' },
    { nome: 'Jaqueta', img: 'assets/icon/jaqueta.png' },
    { nome: 'Body', img: 'assets/icon/body.png' },
    { nome: 'Suéter', img: 'assets/icon/sueter.png' },
    { nome: 'Camisa', img: 'assets/icon/camisa1.png' },
  ];

  constructor() { }

}
