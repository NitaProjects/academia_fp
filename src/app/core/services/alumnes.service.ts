// src/app/core/services/alumnes.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Alumne {
  id: number;
  nom: string;
  cognom: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AlumnesService {
  private apiUrl = 'http://116.203.132.2/api/alumnes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Alumne[]> {
    return this.http.get<Alumne[]>(this.apiUrl);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
