import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
    filteredCourses: Course[] = [];
    _filterBy: string = "";
    _courses: Course[] = [];

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retriveAll();
    }

    retriveAll(): void {
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log()
        });
    }

    deleteById(id: number): void {
        this.courseService.deleteById(id).subscribe({
            next: () => {
                console.log('Deleted with success'),
                this.retriveAll()
            },
            error: err => console.log(err)
        });
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}