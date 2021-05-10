import { Employee } from './../IEmployee';
import { CrudServiceService } from './../crud-service.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  EmployeeList:any= [];
  selectedEmployee:Employee;
  constructor(public crudService:CrudServiceService) { }

  ngOnInit() {
    this.loadEmployee();
  }
  loadEmployee(){
    this.crudService.GetEmployee().subscribe((data=>{
      this.EmployeeList=data;
    }))
  }

}
