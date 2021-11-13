import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista: string[] = ['Hard drive 1',
                     'Hard drive 2',
                     'USB',
                     'CD ROM',
                     'PXE'];

  constructor() {}

  //al pulsar el icono flecha arriba llamamos este metodo que busca el nombre
  //que debe de subir una posicion dentro de nuestro array lista
  subir(nombre: string){
    //la posicion del nombre buscado
    const posicion: number = this.lista.indexOf(nombre);
    //ahora cambiamos nuestro array
    const aux = this.lista[posicion-1];
    this.lista[posicion-1] = nombre;
    this.lista[posicion] = aux;
  }

  //lo mismo pero para bajar el nombre
  bajar(nombre: string){
    //la posicion del nombre buscado
    const posicion: number = this.lista.indexOf(nombre);
    //ahora cambiamos nuestro array
    const aux = this.lista[posicion+1];
    this.lista[posicion+1] = nombre;
    this.lista[posicion] = aux;
  }

}
