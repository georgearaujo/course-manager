import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId: number = 0;

    constructor(private activateRoute: ActivatedRoute) { }

    ngOnInit(): void {
        var value = this.activateRoute.snapshot.paramMap.get('id');
        this.courseId = value != null ? +value : 0;
    }

}