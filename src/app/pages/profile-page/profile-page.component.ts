import {Component, OnInit} from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import {IUserProfile} from "../../interfaces/profile";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

    constructor( private  profileService: ProfileService ) {}

    profile!: IUserProfile;

    ngOnInit() {
        this.profileService.getCurrentUserProfile().subscribe( resp => {
            this.profile = resp;
        });
    }
}
