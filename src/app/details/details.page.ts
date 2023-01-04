import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseSer: ListCoursesService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.activatedRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     console.log(p.get('id'));
    //   },
    // });
    this.selectedCourse = this.courseSer.getCourseById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }
}
