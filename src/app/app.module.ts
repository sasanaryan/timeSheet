import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { AccountComponent } from 'src/app/components/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimesheetFormComponent } from './components/timesheet-form/timesheet-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeItemComponent } from './components/time-item/time-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './components/shared/shared.component';
import { TwDropdownModule } from 'ng-tw';

const appRoutes: Routes = [
  { path: '', component: TimesheetFormComponent },
  { path: 'login', component: AuthComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    TimesheetFormComponent,
    NavbarComponent,
    TimeItemComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TwDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
