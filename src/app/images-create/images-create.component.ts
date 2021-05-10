import { Employee } from './../IEmployee';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators,FormsModule, NgForm} from '@angular/forms';
import { CrudServiceService } from '../crud-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-images-create',
  templateUrl: './images-create.component.html',
  styleUrls: ['./images-create.component.css']
})
export class ImagesCreateComponent implements OnInit {
  imgSrc:string='/assets/img/a1.png';
  selectedImage:any=null;
  isSubmitted:boolean=false;
  employee:Employee;

  formTemplate=new FormGroup({
    employeeId:new FormControl('',Validators.required),
    fullName:new FormControl('',Validators.required),
    nic:new FormControl('',Validators.required),
    imagename:new FormControl(''),
    Password:new FormControl('',Validators.required),
    profilePhoto:new FormControl(''),
    CurrentDeptCode:new FormControl('',Validators.required)
  })
  constructor(public crudService:CrudServiceService) { }

  ngOnInit() {
    this.onSubmit(this.formTemplate.value);
  }
  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader =new FileReader();
      reader.onload=(e:any)=> this.imgSrc=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage=event.target.files[0];
    }
    else{
      this.imgSrc='/assets/img/a1.png';
      this.selectedImage=null;
    }
  }

  onSubmit(form:NgForm){
    this.isSubmitted=true;
    this.crudService.postEmployee.subscribe((
      res =>{
        this.resetForm(form);
      },
      err=>{console.log(err);}
    ));
    // this.crudService.createEmployee(this.employee).subscribe((data=>{
    //   this.employee=data;
   // }))
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.crudService.formData=new Employee();
  }
  get formControls(){
   return this.formTemplate['controls']
  }
}
