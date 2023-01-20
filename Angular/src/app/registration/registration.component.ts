import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit{
 
  user=new User();
  ngOnInit(){
    
  }
  // msg='';
  constructor()
  {
  
  
  // }
  // registerUser(){
  //   this._service.registerUserFromRemote(this.user).subscribe
  // (
  //   data=>{
  // console.log("response received");
  // this.msg="Registration Successsful";
  // alert("Registered Succesfully");
  // this._router.navigate(['/healthasyst/userlist']);
                                                     
  //   },
  //   error =>{
  //     console.log("exception occured");
  //     this.msg="user with this EmailID is already exist";
  //   }
  // )}
    
 
  }
  DateSelected : any;
  // fetchDateSelected(){
  //   console.log("date selected by user is--" + this.DateSelected);
  // }
  registerUser(){
    alert("Registered successfully");
  }
}

