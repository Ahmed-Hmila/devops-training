import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddUniversiteComponent } from './components/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './components/update-universite/update-universite.component';
import { UniversiteDetailsComponent } from './components/universite-details/universite-details.component';
import { ConfigService } from './services/config.service'; // Import ConfigService

export function initConfig(configService: ConfigService): () => Promise<void> {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    UniversiteListComponent,
    HomepageComponent,
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    UniversiteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
