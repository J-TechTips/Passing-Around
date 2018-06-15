import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './ParentComponent/parent-component.component';
import { ChildComponentComponent } from './ParentComponent/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
