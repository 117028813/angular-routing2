import { Component, OnInit } from '@angular/core';

import { CrisisService } from '../../providers/crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crisis

  constructor(
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.crisis = this.crisisService.crisis
  }

}
