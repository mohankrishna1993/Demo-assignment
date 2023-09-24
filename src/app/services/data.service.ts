import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return of([
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: false, publishedDate: '2023.07.21'},
      {image: '../../assets/images/test.png', article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor', author_name: 'Phillip Anthropy', author_pic: '../../assets/images/profile_pic.png', isPublished: true, publishedDate: '2023.07.21'},
      ]);
  }
}
