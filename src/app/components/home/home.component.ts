import { Component, Input } from '@angular/core';

import { DadosBasicosType } from 'src/types/curriculo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() dadosBasicos?: DadosBasicosType;

  getFirstName() {
    return this.dadosBasicos?.nome.split(' ')[0];
  }

  getLastName() {
    const index = this.dadosBasicos?.nome.indexOf(' ');
    return this.dadosBasicos?.nome.slice(index);
  }
}
