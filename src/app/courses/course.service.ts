import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private coursesUrl: string = "http://localhost:8080/course";

    constructor(private httpClient: HttpClient) {}

    retriveAll() : Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retriveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if(course.id) {
            return this.httpClient.put<Course>(this.coursesUrl, course);
        } else {
            return this.httpClient.post<Course>(this.coursesUrl, course);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }
}