import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit  {

  clicked = false;
  selectedCard: any;
  viewdCards = [];
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
    'Void Seer',
  ];

  newDeck = [];


  constructor( private dataService: DataService ) { }

  ngOnInit() {
    for ( let i = 0; i < this.deck.length; i++) {
      this.dataService.getAll(this.deck[i])
      .subscribe(
        x => {
          this.newDeck.push(x.data);
        });
  }
}

  selectCard(card: any) {
    this.selectedCard = card;
    }


  addCard(card) {
    // if (this.viewdCards.length < 8) {
    //   this.viewdCards.push(card);
    // } else {
    //   alert('Selected cards must not exceed the required number');
    // }
    this.viewdCards.push(card);
  }

  deleteCard(cardIndex) {
    this.viewdCards.splice(cardIndex, 1);
  }

}
