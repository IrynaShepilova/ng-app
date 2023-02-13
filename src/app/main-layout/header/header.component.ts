import { Component } from '@angular/core';
import {IUser} from "../../interfaces/user";

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

}
