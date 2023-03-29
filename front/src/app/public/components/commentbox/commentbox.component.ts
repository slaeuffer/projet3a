import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit {


  commentForm: FormGroup;
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;
  @Output() usercomment = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    ) { }


  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      const comment = {
        commentId : this.id++,
        currentDate : new Date(),
        commentTxt: this.commentForm.controls['comment'].value,
        replyComment: []
      }
      return this.companyService.postComment(comment).subscribe(
        (e) => {
          this.commentInfo.push(comment);
          this.usercomment.emit(this.commentInfo);
          return true;
        },
        (err) => {
          console.log(err);
          return false
        }
        
      );
    }
  }



}