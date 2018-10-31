import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;

  beforeEach(() => {
    component = new CardsComponent();
  });
  it('#should create CardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('#should raise addedCard event when a card is selected', add => {
    component.addedCard.subscribe(x => {
      expect(x).toEqual('card');
      add();
    });
    component.addCard('card');
  });

  it('#should raise deletedCard event when a card is deleted', del => {
    component.deletedCard.subscribe(x => {
      expect(x).toEqual(1);
      del();
    });
    component.deleteCard(1);
  });
});
