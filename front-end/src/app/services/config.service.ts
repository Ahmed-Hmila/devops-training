import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http
      .get('/assets/config.json')
      .toPromise()
      .then((data) => {
        this.config = data;
      })
      .catch((err) => {
        console.error('Could not load configuration', err);
        throw err;
      });
  }

  get apiUrl(): string {
    return this.config?.apiUrl || '';
  }
}
