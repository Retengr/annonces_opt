import { AnnonceService } from "./annonce.service";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Annonce } from "../domaine/annonce";


describe('AnnonceService Tests', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnnonceService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('service should be created', inject([AnnonceService], (service: AnnonceService) => {
    expect(service).toBeTruthy();
  }));

  it('returns 1 annonce', () => {
    const fakeDataFromServer: Annonce =     {"id":2,"titre":"aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non","texte":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","imageURL":"http://dummyimage.com/167x131.bmp/cc0000/ffffff","prix":69225};
    const testData: Annonce =     {"id":1,"titre":"aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non","texte":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","imageURL":"http://dummyimage.com/167x131.bmp/cc0000/ffffff","prix":69225};
  
    // Make an HTTP GET request
    httpClient.get<Annonce>("http://blah/data")
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne('http://blah/data');
    expect(req.request.method).toEqual('GET');
    req.flush(testData); 
    //httpTestingController.verify();
  });
 

});