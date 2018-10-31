import { DataService } from './../services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckComponent } from './deck.component';
import { from } from 'rxjs';

describe('DeckComponent', () => {
  let component: DeckComponent;
  let service: DataService;

  beforeEach(() => {
    service = new DataService(null);
    component = new DeckComponent(service);
  });

  it('#should create DeckComponent', () => {
    expect(component).toBeTruthy();
  });

  it('#should set newDeck with the items returned from the server', () => {

    const items = [1, 2, 3];
    const args = 'args';
    spyOn(service, 'getAll').and.callFake( () => {
      return from(items);
    });

    spyOn(component, 'ngOnInit').and.callFake( () => {
      return from([service.getAll(args)]);
    });

    service.getAll(args).subscribe( x => component.newDeck.push(x));
    component.ngOnInit();

    expect(component.newDeck).toEqual(items);
  });

  it('#should pass the selected card', () => {
    const card = 'card';

    component.selectCard(card);

    expect(component.selectedCard).toBe(card);
  });

  it('#should add the selected card to the selectedDeckCards', () => {
   const card = 'card';

   component.addCard(card);

   expect(component.selectedDeckCards).toContain(card);
  });

  it('#should not add a card if the selectedDeckCards have 8 cards', () => {
    component.selectedDeckCards = [1, 2, 3, 4, 5, 6, 7, 8];
    const card = 'card';

    component.addCard(card);

    expect(component.selectedDeckCards).not.toContain(card);
  });

  it('#should throw an error if the selectedDeckCards have 8 cards', () => {
    component.selectedDeckCards = [1, 2, 3, 4, 5, 6, 7, 8];
    const card = 'card';
    const message = 'Selected cards must not exceed the required number';
    spyOn(window, 'alert');

    component.addCard(card);

    expect(window.alert).toHaveBeenCalledWith(message);
  });

  it('#should delete the selected card from the selectedDeckCards', () => {
    component.selectedDeckCards = [1, 2, 3];

    component.deleteCard(1);

    expect(component.selectedDeckCards).not.toContain(2);
  });

});
