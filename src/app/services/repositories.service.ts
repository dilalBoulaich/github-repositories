import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../models/Repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  lastPageLoaded: number = 1;
  dateToFetch: string;

  constructor(private http: HttpClient) {
    var date = new Date();
    date.setDate(date.getDate() - 30);
    this.dateToFetch = date.toISOString().split('T')[0];
  }

  getLastNDaysRepositories() {
    const url = 'https://api.github.com/search/repositories';
    let params = {
      q: 'created:>' + this.dateToFetch,
      sort: 'stars',
      order: 'desc',
      page: this.lastPageLoaded.toString()
    };

    this.lastPageLoaded++;
    
    return this.http.get<Repository>(url, { params });
  }
}
