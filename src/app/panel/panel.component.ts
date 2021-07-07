import { Component, OnInit } from '@angular/core';

import { Sentence } from '../shared/sentence.model';
import { Sentences } from './sentences-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public phrases: Sentence[] = Sentences;
  public instruction: string = 'Traduza a frase:';
  public awnser: string = '';

  public round: number = 0;
  public roundPhrase: Sentence;

  constructor() {
    this.roundPhrase = this.phrases[this.round];
  }

  ngOnInit(): void {}

  public updateAwnser(awnser: Event): void {
    this.awnser = (<HTMLInputElement>awnser.target).value;
    console.log(this.awnser);
  }

  public verifyAwnser(): void {
    console.log('Verificar resposta: ', this.awnser);
  }
}
