import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Curso inicial de Angular',
                imageUrl: '',
                price: 19.99,
                code: 'DIO-001',
                duration: 30,
                rating: 82,
                releaseDate: '05/06/2019'
            },
            {
                id: 2,

                name: 'Componentes Angular',
                imageUrl: '',
                price: 24.99,
                code: 'DIO-002',
                duration: 10,
                rating: 95,
                releaseDate: '27/12/2019'
            }
        ]
    }

    courses: Course[] = [];
}