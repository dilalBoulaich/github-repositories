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

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit() {
    let fetchedRepositories;
    this.repositoriesService.getLastNDaysRepositories().subscribe(
      (data) => {
        fetchedRepositories = data;
      },
      (error) => {

      },
      () => {
        fetchedRepositories.items.forEach(repository => {
          this.repositories.push({
            name: repository.name,
            description: repository.description,
            startsNumber: repository.stargazers_count,
            issuesNumber: repository.open_issues_count,
            ownerAvatar: repository.owner.avatar_url,
            creationDate: new Date(repository.created_at)
          });
        });
      }
    );
  }


}
