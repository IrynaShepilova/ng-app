import {Component} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public user: IUser = {
        name: "Alexander",
        lastName: "The Great"
    }

    constructor(
        private routerState: ActivatedRoute,
        private router: Router,
    ) {
    }

    navigateHome() {
        this.router.navigate(["home"]);
    }

}
