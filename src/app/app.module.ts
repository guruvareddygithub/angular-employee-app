
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
