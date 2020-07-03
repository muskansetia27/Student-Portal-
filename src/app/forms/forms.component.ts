import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers:[DatabaseService]
})
export class FormsComponent implements OnInit {

  public new_lastName;
  public new_firstName;
  public new_email;
  public new_comments;
  public new_options;

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  createPerson(lastName, firstName, email, comments, option) {

    const lastname  = { lastName };
    const firstname = { firstName };
    const Email     = { email };
    const Comments  = { comments };
    const Option    = { options  : option };

    this.database.createPerson(lastname, firstname, Email, Comments, Option);
  }
}
