import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { switchMap, shareReplay, tap, filter } from 'rxjs/operators';

interface Universite {
  idUniversite?: number;
  nomUniversite?: string;
  adresse?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl$: Observable<string>;

  constructor(private http: HttpClient) {
        // Share the result so that multiple calls don't trigger multiple loads of config
        this.apiUrl$ = from(this.loadConfig()).pipe(
          filter(config=> !!config),
          tap(config=> console.log("config loaded: ", config)),
          switchMap((config)=> of(config.apiUrl)),
          shareReplay(1)
        )
  }
  private async loadConfig(): Promise<any> {
      try {
          return await this.http.get<any>('assets/config.json').toPromise();
        } catch (error) {
            console.error('Error loading configuration file:', error);
            return null; // or throw error to stop app bootstrap in your module
        }
  }


  getUniversites(): Observable<Universite[]> {
    return this.apiUrl$.pipe(
      switchMap(url=> this.http.get<Universite[]>(`${url}/retrieve-all-universites`))
    )
  }

  getUniversiteById(id: number): Observable<Universite> {
    return this.apiUrl$.pipe(
      switchMap(url=> this.http.get<Universite>(`${url}/retrieve-universite/${id}`))
    )
  }
  addUniversite(universite: Universite): Observable<Universite> {
    return this.apiUrl$.pipe(
      switchMap(url=>this.http.post<Universite>(`${url}/add-universite`, universite))
    )
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.apiUrl$.pipe(
      switchMap(url=> this.http.put<Universite>(`${url}/modify-universite`, universite))
    )
  }

  deleteUniversite(id: number): Observable<void> {
    return this.apiUrl$.pipe(
      switchMap(url=>this.http.delete<void>(`${url}/remove-universite/${id}`))
    )
  }
}