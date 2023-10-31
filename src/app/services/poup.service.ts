import { Injectable } from '@angular/core';
import { User } from './user.service';
import { Contact } from './contact.service';
import { Task } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class PoupService {
  showAddContactPopup:boolean = false;
  behindPopupContainer:boolean = false;
  addTaskPopup:boolean = false;
  addContact:boolean = false;
  editContact:boolean = false;
  contactForView: Contact | null = null;
  taskPopupForView:Task |null = null;


  constructor() { }

  closePopups() {
    this.behindPopupContainer = false;
    this.addContact = false;
    this.editContact = false;
    this.addTaskPopup = false;
    this.taskPopupForView = null;
  }

  showTaskPopup(task:Task) {
    this.behindPopupContainer = true;
    this.taskPopupForView = task;

  }


}
