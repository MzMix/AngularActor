import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ActorService } from './actor.service';
import { MockData } from 'src/mockData';
import { Actor } from 'src/interfaces/actor.interface';

describe('ActorService', () => {
  let service: ActorService;
  let httpController: HttpTestingController;
  let url = 'api/actors';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getActors and return an array of Actors', (done) => {
    service.getAllActors().subscribe((res) => {
      expect(res).toEqual(MockData);

      console.log(res);

      const req = httpController.expectOne({
        method: 'GET',
        url: `${url}`,
      });

      req.flush(MockData);
    });

    done();
  });

  it('should call getActorById with randomized id and return the appropriate Actor', (done) => {
    const testId = Math.floor(Math.random() * MockData.length);

    service.getActorById(testId).subscribe((res) => {
      expect(res).toEqual(MockData[testId]);

      const req = httpController.expectOne({
        method: 'GET',
        url: `${url}/${testId}`,
      });

      req.flush(MockData[testId]);
    });

    done();
  });

});
