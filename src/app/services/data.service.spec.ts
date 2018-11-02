import { DataService } from './data.service';
import { from, throwError } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    service = new DataService(null);
  });

  it('#should create DataService', () => {
    expect(service).toBeTruthy();
  });

  it('#should return items from the server', () => {
    let deck = [];
    const items = [1, 2, 3];
    const args = 'args';
    spyOn(service, 'getAll').and.callFake(() => {
      return from([items]);
    });

    service.getAll(args).subscribe(x => (deck = x));

    expect(deck).toEqual(items);
  });

  it('#should catch the Error if server throws one', () => {
    const error = 'Error from the server';
    let result;
    const args = 'args';
    spyOn(service, 'getAll').and.callFake(t => {
      return throwError(error);
    });

    service.getAll(args).subscribe(() => console.log(), err => (result = err));

    expect(result).toBe(error);
  });
});
