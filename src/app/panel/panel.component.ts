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

  ngOnInit(): void {}

  public updateAwnser(): void {
    console.log('Teste');
  }
}
