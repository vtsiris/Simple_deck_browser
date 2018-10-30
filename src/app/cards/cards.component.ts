import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() selectedCard;
  @Input() viewdCards;
  @Output() addedCard = new EventEmitter();
  @Output() deletedCard = new EventEmitter();

  constructor( ) { }

  addCard(card: string) {
    this.addedCard.emit(card);
  }

  deleteCard(index: number) {
    this.deletedCard.emit(index);
  }
}
