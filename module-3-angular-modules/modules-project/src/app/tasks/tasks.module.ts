import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [TasksComponent]
})
export class TasksModule {}