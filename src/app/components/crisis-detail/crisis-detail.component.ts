import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrisisService } from '../../providers/crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisisItem

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
    const id: number = Number.parseInt(this.route.snapshot.paramMap.get('id'))
    this.crisisItem = this.crisisService.getCrisisItem(id)
  }

}
