import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  postQuiz(data: any) {
    return this.http.post<any>('http://localhost:3000/quiz', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getQuiz(data: any) {
    return this.http.get<any>('http://localhost:3000/quiz', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateQuiz(id: any, data: any) {
    console.log('id-', id);
    console.log('data--', data);

    return this.http.put<any>('http://localhost:3000/quiz/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteQuiz(id: any) {
    return this.http.delete<any>('http://localhost:3000/quiz/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
