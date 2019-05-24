import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyComponent,
    EventComponent,
    OnewayComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'header'},
      {path:'header',component:HeaderComponent,
    children:[
      {path:'property',component:PropertyComponent},
      {path:'event',component:EventComponent},
      {path:'oneway',component:OnewayComponent},
      {path:'twoway',component:TwowayComponent}
      ]}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
