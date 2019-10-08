import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.page.html',
  styleUrls: ['./finalizar-compra.page.scss'],
})
export class FinalizarCompraPage implements OnInit {

  cep:string
  constructor() { }

  ngOnInit() {
  }
  async buscarEndereco(){
    console.log(this.cep)
    fetch("https://viacep.com.br/ws/"+this.cep+"/json").then(function(dados){
      dados.json().then(function(endereco){
        console.log(endereco)
      })

    })

  }
}
