import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularReactiveGetValueReset';

 
  signupForm:FormGroup;
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string=""

//   constructor(private formBuilder: FormBuilder){
//     this.signupForm = this.formBuilder.group({
//       fname: new FormControl(),
//       lname: new FormControl(),
//       email: new FormControl(),
//       upassword: new FormControl()
//     })
//  }
  constructor(private formBuilder: FormBuilder){
     this.signupForm = this.formBuilder.group({
       fname:['', Validators.required],
       lname:['', Validators.required ],
       email:['', Validators.compose([Validators.required, Validators.email])],
       upassword:['', Validators.required]
     })
  }

  postData(signupForm:any){
    this.firstname= this.signupForm.get('fname').value;
   
    console.log(this.firstname)
      console.log(this.signupForm.value)
  }

  resetForm(){
   // this.signupForm.reset();
   this.signupForm.reset({
     fname:"pranav",
     lname:"verma"
   });

  }

  
}
