import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileReadServiceService {
  constructor(private httpClient: HttpClient) {}

  getTextFromFile(file: string, text: string) {
    return this.httpClient.get(`app/files/${file}.txt`, { responseType: 'text' });
  }
}
