import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "../app.component";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.modulo";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseInfoComponent,
        CourseListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
            {
                path: 'courses', component: CourseListComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CourseModule {

}