import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab;
  constructor(private courseSer: ListCoursesService) {}
  ngOnInit(): void {
    this.tab = this.courseSer.getAllCourses();
    console.log(this.tab);
  }
}
