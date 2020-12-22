import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ToastrService } from 'ngx-toastr';
//angular form
import { NgForm } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";
import { Router } from "@angular/router";



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  collabEmail:string;
  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const uid = uuidv4()
    // const { collabEmail} = f.form.value;
    //further sanitization - do here

    this.db.object(`/collab/${uid}`)
      .set({
        // console.log(res);
        // const { uid } = res.user;
        id:uid,
        collabEmail: this.collabEmail,
        date:Date.now(),
      }) 
      .then(() => {
        this.router.navigateByUrl("/");
        this.toastr.success("Thanks for your intreset, keep checking mail for further updates");
      })
      .catch((err) => {
        this.toastr.error("Something went wrong, try after sometime");
      });
  }
 
}
