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

  ngOnInit(): void {}
}
