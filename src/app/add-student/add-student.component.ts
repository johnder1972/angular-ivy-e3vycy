import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  public studentForm: FormGroup;  // Define FormGroup to student's form
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

 
  ngOnInit() {
    this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();              // Call student form when component is ready
  }

  // Reactive student form
  studenForm() {
    this.studentForm = this.fb.group({
      projectDate: ['', [Validators.required, Validators.minLength(2)]],
      projetLenght: [''],
      membres: [''],
      buts: [''],
      taches: [''],
      decisions: [''],
      
      })  
  }

  // Accessing form control using getters
  get projectDate() {
    return this.studentForm.get('projectDate');
  }

  get projetLenght() {
    return this.studentForm.get('projetLenght');
  }  

  get membres() {
    return this.studentForm.get('membres');
  }

  get buts() {
    return this.studentForm.get('buts');
  }

  get taches() {
    return this.studentForm.get('taches');
  }

  get decisions() {
    return this.studentForm.get('decisions');
  }

  // Reset student form's values
  ResetForm() {
    this.studentForm.reset();
  }  
 
  submitStudentData() {
    this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    this.toastr.success(this.studentForm.controls['projectDate'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}