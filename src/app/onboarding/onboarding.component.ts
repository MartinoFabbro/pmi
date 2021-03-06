import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit, AfterViewInit {

  formGroup: FormGroup;
  type: string;
  email: string;
  success: boolean;

  @ViewChild('successModal') successModal: TemplateRef<any>;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog, private titleService:Title) {
                this.titleService.setTitle("P24: Onboarding");

               }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.email = params['email'];
        this.success = params['success'];

        if (params['type'] === 'Demo') {
          this.type = 'Webform Demo PMI';
        } else if (params['type'] === 'Light') {
          this.type = 'Webform Piano Light';
        } else if (params['type'] === 'Full') {
          this.type = 'Webform Piano Full';
        }

        console.log(this.type, this.email);
      }
    );

    this.formGroup = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl(this.email, [Validators.email, Validators.required]),
      leadSource: new FormControl(this.type, [Validators.required]),
      industry: new FormControl('', [Validators.required]),
      employeesNumber: new FormControl('', [Validators.required]),
      currentManagement: new FormControl('', [Validators.required]),
      oid: new FormControl('00D09000002Xecz', [Validators.required]),
      retUrl: new FormControl('https://procurement24ore.it/onboarding?type=Demo$success=true', [Validators.required])
    });
  }

  ngAfterViewInit(): void {
    if (this.success) {
      this.dialog.open(this.successModal);
    }
  }

  onSubmit() {
    console.log(document.forms['salesforceForm'])
    document.forms['salesforceForm'].submit().then(resp => {
      }, error => {
      });

  }

  close() {
    this.dialog.closeAll();
    this.router.navigate(['/home']);
  }


}
