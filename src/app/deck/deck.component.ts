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
    { name: 'Burial from a Different Dimension', type: 'Spell'},
    { name: 'Charge of the Light Brigade', type: 'Spell'},
    { name: 'Infernoid Antra', type: 'Monster'},
    { name: 'Infernoid Attondel', type: 'Monster'},
    { name: 'Infernoid Decatron', type: 'Monster'},
    { name: 'Infernoid Devyaty', type: 'Monster'},
    { name: 'Infernoid Harmadik', type: 'Monster'},
    { name: 'Infernoid Onuncu', type: 'Monster'},
    { name: 'Infernoid Patrulea', type: 'Monster'},
    { name: 'Infernoid Pirmais', type: 'Monster'},
    { name: 'Infernoid Seitsemas', type: 'Monster'},
    { name: 'Lyla, Lightsworn Sorceress', type: 'Monster'},
    { name: 'Monster Gate', type: 'Spell'},
    { name: 'One for One', type: 'Spell'},
    { name: 'Raiden, Hand of the Lightsworn', type: 'Monster'},
    { name: 'Reasoning', type: 'Spell'},
    { name: 'Time-Space Trap Hole', type: 'Spell'},
    { name: 'Torrential Tribute', type: 'Spell'},
    { name: 'Upstart Goblin', type: 'Spell'},
    { name: 'Void Seer', type: 'Spell'}
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
