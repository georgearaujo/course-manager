import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course = new Course();

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        this.retriveById();
    }

    retriveById(): void {
        var value = this.activateRoute.snapshot.paramMap.get('id')!;
        this.courseService.retriveById(+value).subscribe({
            next: courseRetorned => {
                this.course = courseRetorned;
            },
            error: err => console.log(err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => this.course = course,
            error: err => console.log(err)
        }); 
    }
}