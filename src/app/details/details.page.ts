import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private courseSer: ListCoursesService,
    private alertCtrl: AlertController,
    private router: Router
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

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Are you sure to delete this course ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse);
            console.log(this.courseSer.getAllCourses());

            this.router.navigate(['/']);
          },
        },
      ],
    });

    await alert.present();
  }
}
