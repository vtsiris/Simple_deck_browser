import { DeckComponent } from './../deck/deck.component';
import { DataService } from './data.service';
import { from } from 'rxjs';


describe('DataService', () => {

  let service: DataService;

  beforeEach( () => {
    service = new DataService(null);
  });

  it('#should create DataService', () => {
    expect(service).toBeTruthy();
  });

  it('#should return items from the server', () => {
    let deck = [];
    const items = [1, 2, 3];
    const args = 'args';
    spyOn(service, 'getAll').and.callFake( () => {
      return from([items]);
    });

    service.getAll(args).subscribe( x => deck = x);

    expect(deck).toEqual(items);
  });

});
