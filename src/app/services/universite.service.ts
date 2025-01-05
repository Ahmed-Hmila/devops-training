import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

interface Universite {
  idUniversite?: number;
  nomUniversite?: string;
  adresse?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  private apiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.apiUrl;
  }

  getUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/retrieve-all-universites`);
  }

  getUniversiteById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.apiUrl}/retrieve-universite/${id}`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.apiUrl}/add-universite`, universite);
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/modify-universite`, universite);
  }

  deleteUniversite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-universite/${id}`);
  }
}
