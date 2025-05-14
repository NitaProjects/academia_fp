// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../core/models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl; // Ajustar si usas proxy
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);

        // ✅ Obtener info del usuario actual
        this.fetchUser().subscribe(user => {
          this.userSubject.next(user);

          switch (user.role) {
            case 'admin': this.router.navigate(['/admin']); break;
            case 'teacher': this.router.navigate(['/teacher']); break;
            case 'student': this.router.navigate(['/student']); break;
          }
        });
      })
    );
  }


  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.userSubject.next(null);
        this.router.navigate(['/auth/login']);
      })
    );
  }

  fetchUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUser(): Observable<any> {
    return this.http.get<any>('http://116.203.132.2/api/me');
  }

}
