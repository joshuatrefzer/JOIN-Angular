import { Component, OnDestroy, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit, OnDestroy {

  constructor(public templateService: TemplateService) { }
  ngOnInit(): void {
    this.templateService.addTask = true;
  }

  ngOnDestroy(): void {
    this.templateService.addTask = false;

  }
}
