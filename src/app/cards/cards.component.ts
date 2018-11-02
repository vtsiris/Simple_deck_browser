import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() selectedCard;
  @Input() newDeck;
  @Output() addedCard = new EventEmitter();
  @Output() deletedCard = new EventEmitter();

  addCard(card: string) {
    this.addedCard.emit(card);
  }

  deleteCard(index: number) {
    this.deletedCard.emit(index);
  }
}
