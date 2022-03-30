import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: any;
  errorMessage: any;

  constructor(private blogService: BlogService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.spinner.show();
    this.blogService.getPosts().subscribe(
      data => {
        this.blogPosts = data
        console.log(data);
        this.spinner.hide();

      },
      (error) => {
        this.errorMessage = error.message;
        this.spinner.hide();
        console.log(error)
      }
    )
  }


}
