import { DataService } from './../services/data.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent  {

  clicked = false;
  selectedCard: string;
  information = 'Please select a card';
  deck = [
    'Burial from a Different Dimension',
    'Charge of the Light Brigade',
    'Infernoid Antra',
    'Infernoid Attondel',
    'Infernoid Decatron',
    'Infernoid Devyaty',
    'Infernoid Harmadik',
    'Infernoid Onuncu',
    'Infernoid Patrulea',
    'Infernoid Pirmais',
    'Infernoid Seitsemas',
    'Lyla, Lightsworn Sorceress',
    'Monster Gate',
    'One for One',
    'Raiden, Hand of the Lightsworn',
    'Reasoning',
    'Time-Space Trap Hole',
    'Torrential Tribute',
    'Upstart Goblin',
    'Void Seer'
  ];


  constructor( private dataService: DataService ) { }

  selectCard(card: string) {
    this.dataService.getAll(card)
    .subscribe(x => this.selectedCard = x.data);
  }

  isClicked() {
    this.clicked = !this.clicked;
  }

}
