import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  constructor(private courseSer: ListCoursesService, private router: Router) {}

  ngOnInit() {}

  addNewCourse(valueForm) {
    console.log(valueForm);
    this.courseSer.addCourse(valueForm);
    this.router.navigateByUrl('/');
  }
}
