import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  postUser(data: any) {
    return this.http.post<any>('http://localhost:3000/user', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getUser(data: any) {
    return this.http.get<any>('http://localhost:3000/user', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateUser(id: any, data: any) {
    console.log('id-', id);
    console.log('data--', data);

    return this.http.put<any>('http://localhost:3000/user/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteUserDetail(id: any) {
    return this.http.delete<any>('http://localhost:3000/user/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
