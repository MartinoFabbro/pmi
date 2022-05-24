import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgxSpinnerService } from "ngx-spinner";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  blogPosts: any;
  errorMessage: any;

  constructor(private blogService: BlogService, private spinner: NgxSpinnerService, private titleService:Title) {
    this.titleService.setTitle("P24: Clienti");
   }


  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.spinner.show();
    this.blogService.getSuccessStories().subscribe(
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
