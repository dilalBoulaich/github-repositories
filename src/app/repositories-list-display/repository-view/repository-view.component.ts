import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Repository } from 'src/app/models/Repository';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css']
})
export class RepositoryViewComponent implements OnChanges {
  repository: Repository;

  @Input() passRepository: Repository;

  constructor() { }

  ngOnChanges(): void {
    this.repository = this.passRepository;
  }

}
