import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-remove-text',
  templateUrl: './remove-text.component.html',
  styleUrls: ['./remove-text.component.css']
})
export class RemoveTextComponent implements OnInit {

  @ViewChild('texto',{static:false}) texto: ElementRef;
  constructor() { }

  ngOnInit() {
  }


  cambiartexto(){
    var stringfinal:any = [];
    let string :any = this.texto.nativeElement.value;
    //  stringfinal = string.replace(/\n/gi, ' '); .replace(/\.  /gi, '. \n\n');
    stringfinal = string.replace(/\.\n/gi, '#####');
    setTimeout(() => {
        stringfinal = stringfinal.replace(/\n/gi, ' ').replace(/#####/gi, '.\n\n');
        console.log(stringfinal);
        this.texto.nativeElement.value = stringfinal;
    }, 50);

    this.texto.nativeElement.value = stringfinal;
  }

  copiartexto(){

  /* Select the text field */
  this.texto.nativeElement.select();
  this.texto.nativeElement.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + this.texto.nativeElement.value);

  }
  limpiartexto(){
    this.texto.nativeElement.value = '';

  }
}
