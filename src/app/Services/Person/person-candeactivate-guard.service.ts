import { Injectable } from "@angular/core";
import {  CanDeactivate } from "@angular/router";
import { PersonComponent } from "src/app/person/person.component";


@Injectable()
export class PersonCanDeactivateGuardService implements
 CanDeactivate<PersonComponent> {
    constructor(){}
    canDeactivate(component: PersonComponent):boolean{
       if(component.personF.dirty)
       {
        return confirm('Are you sure you want to discard your changes?.');
        
       }
       else
       return true;
    }

}