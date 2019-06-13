import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from './user';
import { AuthResponse } from 'src/app/auth/auth-response';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Storage } from  '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS: string = "https://upcn-salud-api.now.sh/api/auth";
  authSubject  =  new  BehaviorSubject(false);
  
  constructor(private http: HttpClient, private storage: Storage) { }

  login(user: User): Observable<AuthResponse> {
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/signin`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }
  
  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.authSubject.value;
  }

  getToken() {
    return this.storage.get('ACCESS_TOKEN').then((val) => {
       return val;
    });
  }
}
