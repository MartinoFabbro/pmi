import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {SalesforceService} from '../services/salesforce.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  formGroup: FormGroup;
  type: string;
  email: string;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private salesForceService: SalesforceService) { }

  private obj = {
    first_name: '',
    last_name: '',
    company: '',
    phone: '',
    email: '',
    lead_source: '',
    industry: '',
    '00N3O000005k0Om': '', // employeesNumber
    '00N3O000004YY3E': '', // currentManagement
    oid: '',
    retURL: ''
  };

  async ngOnInit() {

    await this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.email = params['email'];

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
      oid: new FormControl('00D3O0000008oml', [Validators.required]),
      retUrl: new FormControl('http://', [Validators.required])
    });
  }

  onSubmit() {

    this.obj.first_name = this.formGroup.get('firstName').value;
    this.obj.last_name = this.formGroup.get('lastName').value;
    this.obj.company = this.formGroup.get('company').value;
    this.obj.phone = this.formGroup.get('phone').value;
    this.obj.email = this.formGroup.get('email').value;
    this.obj.lead_source = this.formGroup.get('leadSource').value;
    this.obj.industry = this.formGroup.get('industry').value;
    this.obj['00N3O000005k0Om'] = this.formGroup.get('employeesNumber').value;
    this.obj['00N3O000004YY3E'] = this.formGroup.get('currentManagement').value;
    this.obj.oid = this.formGroup.get('oid').value;
    this.obj.retURL = this.formGroup.get('retUrl').value;


    this.salesForceService.sendForm(this.obj).then(resp => {
      console.log('SIIIIII');
    }, error => {
      console.log('NOOOOO');
    });
  }




}
