import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ServerService
  ) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      linkToWork: ['', Validators.required],
      img: [''],
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData = {
        id: Math.random(),
        ...this.projectForm.value,
      };

      console.log(projectData);

      this.service.postProject(projectData).subscribe(projects => {
        console.log(projects);
      });

      this.projectForm.reset();
    }
  }
}
