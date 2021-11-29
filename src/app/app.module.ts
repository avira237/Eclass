import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule,routingComponents} from './app-routing.module';
//design
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';

import { ClassesComponent } from './admin/classes/classes.component';
import { PostAddComponent} from './posts/post-add/post-add.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainHeaderBarComponent } from './header-bar/main-headerbar/main-headerbar.component';

//material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatDialogModule } from '@angular/material/dialog';
import {  MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table' ;
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateExamComponent } from './Exam/create-exam.component';
@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    HeaderBarComponent,
    LoginComponent,
    RegistrationComponent,
    MainHeaderBarComponent,
    ClassesComponent,
    routingComponents,
    CreateExamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    HttpClientModule,
    MatGridListModule,
    NgbModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatTabsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   ngOnDestroy(): void {
    localStorage.clear();
   }

 }
