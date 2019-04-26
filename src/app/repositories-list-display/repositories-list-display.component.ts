import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../services/repositories.service';
import { Repository } from '../models/Repository';

@Component({
  selector: 'app-repositories-list-display',
  templateUrl: './repositories-list-display.component.html',
  styleUrls: ['./repositories-list-display.component.css']
})
export class RepositoriesListDisplayComponent implements OnInit {

  repositories = new Array<Repository>();
  repositoresNumberFound: number;
  loaderDisplay: boolean = true;

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit() {
    this.getRepositoriesData();
  }

  onScroll() {
    this.getRepositoriesData();
  }

  getRepositoriesData() {
    this.repositoriesService.getLastNDaysRepositories().subscribe(
      (data) => {
        this.loaderDisplay = true;
        this.repositoresNumberFound = data["total_count"];

        data["items"].forEach(repository => {
          this.repositories.push({
            name: repository.name,
            description: repository.description,
            startsNumber: repository.stargazers_count,
            issuesNumber: repository.open_issues_count,
            ownerAvatar: repository.owner.avatar_url,
            ownerName: repository.owner.login,
            creationDate: new Date(repository.created_at)
          });
        });
      },
      (error) => {

      },
      () => {
        this.loaderDisplay = false;
      }
    );
  }
}
