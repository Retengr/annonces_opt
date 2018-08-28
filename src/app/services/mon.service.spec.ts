import { TestBed, inject } from '@angular/core/testing';

import { MonService } from './mon.service';
import { AutreService } from './autre.service';

describe('MonService', () => {

  beforeEach(() => {
    const autreServiceSpy = jasmine.createSpyObj('AutreService', ['getValue']);
    autreServiceSpy.getValue.and.returnValue(4); 
 
    TestBed.configureTestingModule({
      providers: [MonService,{ provide: AutreService, useValue: autreServiceSpy }]
    });
  });
 
  it('should return a value using simple mock - no injection', () => {
    var fakeAutreService = { getValue:()=>4 };
    var monService: MonService = new MonService(fakeAutreService as AutreService);

    expect(monService.compute(10)).toEqual(40);
  });
  
  it('should return a value using spy - no injection', () => {
    const autreServiceSpy = jasmine.createSpyObj('AutreService', ['getValue']);
    autreServiceSpy.getValue.and.returnValue(4); 
 
    var monService: MonService = new MonService(autreServiceSpy);

    expect(monService.compute(10)).toEqual(40);
  }); 



  it('should be created', inject([MonService], (service: MonService) => {
    expect(service).toBeTruthy();
  }));

  it('should return correct value using injected mock', inject([MonService], (service: MonService) => {
    expect(service.compute(10)).toEqual(40);
  }));

  it('should return correct value using injected than modified mock', inject([MonService], (service: MonService) => {
    var autreServiceSpy = TestBed.get(AutreService);
    autreServiceSpy.getValue.and.returnValue(5); 

    expect(service.compute(10)).toEqual(50);
  }));
});
