// src/app/core/services/ufs.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Uf {
  id: number;
  nom: string;
  modul_id: number;
}

@Injectable({ providedIn: 'root' })
export class UfsService {
  private apiUrl = 'http://116.203.132.2/api/ufs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Uf[]> {
    return this.http.get<Uf[]>(this.apiUrl);
  }

  getById(id: number): Observable<Uf> {
    return this.http.get<Uf>(`${this.apiUrl}/${id}`);
  }

  create(uf: Partial<Uf>): Observable<Uf> {
    return this.http.post<Uf>(this.apiUrl, uf);
  }

  update(id: number, uf: Partial<Uf>): Observable<Uf> {
    return this.http.put<Uf>(`${this.apiUrl}/${id}`, uf);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
