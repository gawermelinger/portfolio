import { Component } from '@angular/core';
import { CurriculoType } from 'src/types/curriculo';
import { MeuPortfolioService } from './meu-portfolio.service';

@Component({
  selector: 'app-meu-portfolio',
  templateUrl: './meu-portfolio.component.html',
  styleUrls: ['./meu-portfolio.component.scss'],
})
export class MeuPortfolioComponent {
  public meuPortfolio?: CurriculoType;

  constructor(private _service: MeuPortfolioService) {}

  ngOnInit() {
    this.buscarCurriculo();
  }

  buscarCurriculo() {
    this._service.getCurriculo().subscribe({
      next: (result) => {
        this.meuPortfolio = result;
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
