import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPortfolioComponent } from './meu-portfolio.component';
import { ComponentModule } from 'src/app/components/component/component.module';

@NgModule({
  declarations: [MeuPortfolioComponent],
  imports: [CommonModule, ComponentModule],
  exports: [MeuPortfolioComponent],
})
export class MeuPortfolioModule {}
