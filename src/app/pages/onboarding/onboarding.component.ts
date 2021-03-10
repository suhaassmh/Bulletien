import { Component, OnInit, Input  } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  
  users = [];
  constructor(
    private db: AngularFireDatabase,
  ) { 
     //get all users
     db.object("/users")
     .valueChanges()
     .subscribe((obj) => {
       if (obj) {
         this.users = Object.values(obj);
         
       } else {
         
         this.users = [];
       
       }
     });
  }

  ngOnInit(): void {
  }

}



