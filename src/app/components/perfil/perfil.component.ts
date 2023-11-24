import { Component, Input } from '@angular/core';
import { DadosBasicosType } from 'src/types/curriculo';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  @Input() dadosBasicos?: DadosBasicosType;
}
