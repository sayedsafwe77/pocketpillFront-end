import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerReactiveForm: FormGroup;
  havePharmacy: boolean= false;
  public form = {
    userName: null,
    userEmail: null,
    userPassword: null,
    userPhone: null,
    userLocation: null,
    pharmacyName: null,
    pharmacyPhoto: null,
    PharmacyOwner:null,
    branchRegion:null,
    branchStreet:null,
  };

  emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordRegex = /^(?=(?:.*[0-9]))(?=(?:.*[a-z]))(?=(?:.*[A-Z])).{6,}$/;
  phoneRegex = /^(01)\d{9}$/;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.registerReactiveForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      userEmail: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      userPassword: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      userPhone: ['', [Validators.required,  Validators.pattern(this.phoneRegex)]],
      userLocation: ['', [Validators.required]],
      pharmacyName: ['', [Validators.required, Validators.minLength(4)]],
      pharmacyPhoto: ['', [Validators.required]],
      PharmacyOwner: ['', [Validators.required, Validators.minLength(4)]],
      branchRegion: ['', [Validators.required, Validators.minLength(4)]],
      branchStreet: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get registerFormControl(){
    return this.registerReactiveForm.controls;
  }


  onSubmit(){ 
    this.authService.register(this.form)
    .subscribe((data) => {
      console.log("dsfsfd");
      
        this.router.navigate(['login']);
    });

  }

  toggleAdmin(){
    this.havePharmacy = !this.havePharmacy;
  }
}