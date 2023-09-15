import { Injectable } from '@angular/core';
import { ServerConfig } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProject } from './models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(ServerConfig.path + '/projects');
  }

  postProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(ServerConfig.path + '/projects', project);
  }
}
