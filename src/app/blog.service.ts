import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
private blogUrl = 'https://niuma.it'

  constructor(private http: HttpClient) { }

getPosts() {
  const url = `${this.blogUrl}/wp-json/wp/v2/posts`
  return this.http.get(url).pipe(catchError(this.errorHandlder))
} 

getSuccessStories() {
  const url = `${this.blogUrl}/wp-json/wp/v2/posts/?categories=108`
  return this.http.get(url).pipe(catchError(this.errorHandlder))
}

getAuthor(id: any) {
  const url = `${this.blogUrl}/wp-json/wp/v2/users/${id}`
  return this.http.get(url).pipe(catchError(this.errorHandlder))

}
errorHandlder(error: HttpErrorResponse) {
  return new Observable((Observer: Observer<any>) => {
    Observer.error(error)
  }
  )
}

getSinglePosts(id: any) {
  const url = `${this.blogUrl}/wp-json/wp/v2/posts/${id}`
  return this.http.get(url).pipe(catchError(this.errorHandlder))
}
}
