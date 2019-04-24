import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../models/Repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  lastPageLoaded: number = 1;

  constructor(private http: HttpClient) { }

  getLastNDaysRepositories() {
    const url = 'https://api.github.com/search/repositories';
    let params = {
      q: 'created:>2019-03-24',
      sort: 'stars',
      order: 'desc'
    };
    
    return this.http.get<Repository>(url, { params });
  }
}
