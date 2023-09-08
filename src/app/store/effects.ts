import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, exhaustMap, map} from "rxjs";
import {ProfileService} from "../services/profile.service";
import * as StoreActions from "./actions";

@Injectable()
export class StoreEffects{

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) {
    }
    getUserProfile$ = createEffect( ()=>   this.actions$.pipe(
        ofType(StoreActions.getCurrentUserProfile),
        exhaustMap( ()=> {
                return this.profileService.getCurrentUserProfile()
                    .pipe(
                        map(userProfile => StoreActions.getCurrentUserProfileSuccess({userProfile}) )
                    );
            }
        ))
    );

}
