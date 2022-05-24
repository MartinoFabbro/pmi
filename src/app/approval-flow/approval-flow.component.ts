import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-approval-flow',
  templateUrl: './approval-flow.component.html',
  styleUrls: ['./approval-flow.component.scss']
})
export class ApprovalFlowComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("P24: Processi Approvativi Personalizzati");
   }
  ngOnInit(): void {
  }

}
