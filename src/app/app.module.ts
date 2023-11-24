import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MeuPortfolioModule } from './pages/meu-portfolio/meu-portfolio.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, MeuPortfolioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
