import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, from, lastValueFrom, tap } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface Contact {
  id: number,
  first_name: string;
  last_name: string;
  mail: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  myContacts$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);


  url = environment.baseUrl + '/contacts/';



  constructor(
    private http: HttpClient,
    ) {
  }


  getContacts() {
    this.loadContacts().subscribe((data) => {
      this.contacts = data;
      this.myContacts$.next(data); // Aktualisieren Sie das BehaviorSubject mit den neuesten Daten
    });
  }

  
  private loadContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url).pipe(
      tap((data) => {
        this.contacts = data;
        this.myContacts$.next(data);
        console.log(this.contacts);
        
      })
    );
  }


  updateContact(form: FormGroup, id: number) {
    const url = `${this.url}${id}/`;
    const data = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      mail: form.value.email,
      phone: form.value.phone
    };

    this.http.put(url, data).subscribe(() => {
      // Hier können Sie die aktualisierten Kontaktinformationen verwenden, wenn Sie sie benötigen
      const updatedIndex = this.contacts.findIndex(contact => contact.id === id);
      if (updatedIndex !== -1) {
        this.contacts[updatedIndex] = { id, ...data };
      }
      this.myContacts$.next(this.contacts); // Aktualisieren Sie das BehaviorSubject mit den neuesten Daten
    }, (error) => {
      console.error('Fehler bei der Aktualisierung des Kontakts', error);
    });
  }


  addContact(form: FormGroup) {
    const data = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      mail: form.value.email,
      phone: form.value.phone
    };

    this.http.post(this.url, data).subscribe((response: any) => {
      // Hier können Sie die neu hinzugefügten Kontaktinformationen verwenden, wenn Sie sie benötigen
      this.contacts.push(response);
      this.myContacts$.next(this.contacts); // Aktualisieren Sie das BehaviorSubject mit den neuesten Daten
    }, (error) => {
      console.error('Contact was not added', error);
    });
  }
  

  deleteContact(id: number) {
    const url = `${this.url}${id}/`;
    this.http.delete(url).subscribe(() => {
      // Hier können Sie den gelöschten Kontakt entfernen, wenn Sie dies benötigen
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      this.myContacts$.next(this.contacts); // Aktualisieren Sie das BehaviorSubject mit den neuesten Daten
    }, (error) => {
      console.error('Fehler beim Löschen des Kontakts', error);
    });
  }



}
