import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

//@ts-ignore
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage implements  OnInit{


  addEvent: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.addEvent = this.formBuilder.group({
      name : ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  getDescriptionArray() {
    return this.addEvent.get('description') as FormArray;
  }
}
