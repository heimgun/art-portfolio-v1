import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/project.model';
import { ListofProjects } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server-service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  projects: any;

  sortAscending: boolean = true; 

  constructor(private service: ServerService) {
  }

  ngOnInit() {
    this.service.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }    


  sortByDate() {
    this.projects.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const comparison =  dateA.getTime() - dateB.getTime();
      return this.sortAscending ? comparison : -comparison;
    });

    this.sortAscending = !this.sortAscending;
  }

}
