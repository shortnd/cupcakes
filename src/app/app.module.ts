import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileReadServiceService } from './services/file-read-service.service';
import { ItemListComponent } from './component/item-list/item-list.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [FileReadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
