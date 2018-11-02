import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  selectedCard: any;
  newDeck = [];
  information = 'Please select a card from the left sidebar ';
  deck = [];
  _deck = [
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    for (let i = 0; i < this._deck.length; i++) {
      this.dataService.getAll(this._deck[i]).subscribe(x => {
        this.deck.push(x.data);
      });
    }
  }

  selectCard(card: any) {
    this.selectedCard = card;
  }

  addCard(card) {
    if (this.newDeck.length < 8) {
      this.newDeck.push(card);
    } else {
      alert('Selected cards must not exceed the required number');
    }
  }

  deleteCard(cardIndex: number) {
    this.newDeck.splice(cardIndex, 1);
  }
}
