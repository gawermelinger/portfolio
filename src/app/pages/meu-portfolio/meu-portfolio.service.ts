import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { curriculo } from 'src/constants/curriculo';
import { CurriculoType } from 'src/types/curriculo';

@Injectable({
  providedIn: 'root',
})
export class MeuPortfolioService {
  constructor() {}

  getCurriculo(): Observable<CurriculoType> {
    return of(curriculo);
  }
}
