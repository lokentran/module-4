import { AwesomeService } from './../../services/awesome.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.css']
})
export class AwesomeEditComponent implements OnInit {
  formEditList: FormGroup;
  id = +this.active.snapshot.paramMap.get('id');

  awesome;

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private active: ActivatedRoute ) { }

  ngOnInit(): void {
    this.formEditList = this.fb.group({
      id:[''],
      tag: [''],
      url: [''],
      descriptions: [''],

    });
    this.awesomeService.getUserById(this.id).subscribe(data=>{
      this.awesome = data;

      console.log(data);

      this.formEditList.patchValue(this.awesome);
    })
  }

  edit () {
    this.awesomeService.edit(this.formEditList.value, this.id).subscribe(data=>{
      this.router.navigate(['']);
    })
  }
}
