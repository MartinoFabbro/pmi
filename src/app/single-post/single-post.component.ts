import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {Location} from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  SinglePosts: any;
  errorMessage: any;
  id: string;
  title: any;
  authorId: string;
  authorName: any;

  constructor(private blogService: BlogService, private spinner: NgxSpinnerService, private titleService:Title, private route: ActivatedRoute, private router: Router, private _location: Location) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id)
    this.getSinglePosts()
  }
  getSinglePosts() {
    this.spinner.show();
    this.blogService.getSinglePosts(this.id).subscribe(
      data => {
        this.SinglePosts = data
        this.authorId = data.author
        this.title = data.title.rendered
        this.getAuthor()
        console.log(data);
        console.log(this.authorId);
        this.titleService.setTitle("P24: " + this.title );
        this.spinner.hide();
      },
      (error) => {
        this.errorMessage = error.message;
        this.spinner.hide();
        this.router.navigate(['/blog'])
      }
    )
  }

  backClicked() {
    this._location.back();
  }

  getAuthor() {
    console.log(this.authorId)
    this.blogService.getAuthor(this.authorId).subscribe(
      data => {
        this.authorName = data
        console.log(data);
      },
    )
  }


}
