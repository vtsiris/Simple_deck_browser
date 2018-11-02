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

  it('#should set deck with the items returned from the server', () => {

    const items = [1, 2, 3];
    const args = 'args';
    spyOn(service, 'getAll').and.callFake( () => {
      return from(items);
    });

    spyOn(component, 'ngOnInit').and.callFake( () => {
      return from([service.getAll(args)]);
    });

    service.getAll(args).subscribe( x => component.deck.push(x));
    component.ngOnInit();

    expect(component.deck).toEqual(items);
  });

  it('#should pass the selected card', () => {
    const card = 'card';

    component.selectCard(card);

    expect(component.selectedCard).toBe(card);
  });

  it('#should add the selected card to the newDeck', () => {
   const card = 'card';

   component.addCard(card);

   expect(component.newDeck).toContain(card);
  });

  it('#should not add a card if the newDeck have 8 cards', () => {
    component.newDeck = [1, 2, 3, 4, 5, 6, 7, 8];
    const card = 'card';

    component.addCard(card);

    expect(component.newDeck).not.toContain(card);
  });

  it('#should throw an error if the newDeck have 8 cards', () => {
    component.newDeck = [1, 2, 3, 4, 5, 6, 7, 8];
    const card = 'card';
    const message = 'Selected cards must not exceed the required number';
    spyOn(window, 'alert');

    component.addCard(card);

    expect(window.alert).toHaveBeenCalledWith(message);
  });

  it('#should delete the selected card from the newDeck', () => {
    component.newDeck = [1, 2, 3];

    component.deleteCard(1);

    expect(component.newDeck).not.toContain(2);
  });

});
