import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCheckboxModule} from '@angular/material/checkbox';// Importiere MatFormFieldModule



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PwresetComponent } from './pwreset/pwreset.component';
import { TemplateComponent } from './template/template.component';
import { SummaryComponent } from './summary/summary.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LegalsComponent } from './legals/legals.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    LoginComponent,
    SignUpComponent,
    PwresetComponent,
    TemplateComponent,
    SummaryComponent,
    AddtaskComponent,
    ContactsComponent,
    LegalsComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
