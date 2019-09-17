import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class FileReadServiceService {
  constructor(private httpClient: HttpClient) {}

  getTextFromFile(file: string, text: string) {
    this.httpClient.get(file, { responseType: 'text' as 'json' }).subscribe(data => {
      const array = data.toString().split('\n');
      let returnArray = [];
      array.forEach(element => {
        if (element !== text) {
          return (returnArray = [element, ...returnArray]);
        }
      });
      return returnArray;
    });
  }
}
