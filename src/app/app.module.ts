import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// forms module
import { FormsModule } from '@angular/forms';

// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// angular2 flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule , AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// environment.ts for firebase config
import { environment } from '../environments/environment'

// services
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

// Guard
import { AuthGuard } from './guard/auth.guard'
import { RegisterGuard } from './guard/register.guard'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientPanelApp'),
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
