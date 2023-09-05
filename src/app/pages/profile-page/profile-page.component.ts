import {Component, OnInit} from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import {IUserProfile} from "../../interfaces/profile";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

    constructor(
        private  profileService: ProfileService,
        private  toastr: ToastrService,
        ) {}

    profile!: IUserProfile;
    maxDate: Date = new Date();
    profileForm = new FormGroup({
        firstName: new FormControl( ),
        lastName: new FormControl( ),
        dateOfBirth: new FormControl( )
    })

    ngOnInit() {
        this.getUserData();
    }

    setFormFieldsValues(){
        this.profileForm.setValue({
            firstName: this.profile.firstName,
            lastName: this.profile.lastName,
            dateOfBirth: this.profile.dateOfBirth,
        })
    }

    getUserData(){
        this.profileService.getCurrentUserProfile().subscribe( resp => {
            this.profile = resp;
            this.setFormFieldsValues();
        });
    }

    submitForm(){
        const firstName: string = this.profileForm.controls.firstName.value;
        const lastName: string = this.profileForm.controls.lastName.value;
        const dateOfBirth: Date = this.profileForm.controls.dateOfBirth.value!;
        const profileData: IUserProfile = { firstName, lastName, dateOfBirth };

        console.log('profileData', profileData);
        this.profileService.update(profileData).subscribe(resp => {
            this.toastr.success('User profile updated', '', {timeOut: 1000});
            this.getUserData();
        }, error => {
            this.toastr.error('Something went wrong', '', {timeOut: 1000});
            console.error('User profile update failed:', error.message);
        })

    }
}
