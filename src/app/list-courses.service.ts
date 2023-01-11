import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      keywords: ['component', 'directive', 'module'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Homer Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      keywords: ['activity', 'intent', 'layout'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Bart Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      keywords: ['page', 'pipe', 'service'],
    },
  ];

  addCourse(newC) {
    newC.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    newC.keywords = newC.keywords.split(',');
    this.tabCourses.push(newC);
  }

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(id) {
    return this.tabCourses.find((c) => c.id == id);
  }

  deleteCourse(course) {
    // this.tabCourses.splice(
    //   this.tabCourses.findIndex((c) => c.id == course.id),
    //   1
    // );

    this.tabCourses = this.tabCourses.filter((c) => c.id != course.id);
  }
  constructor() {}
}
