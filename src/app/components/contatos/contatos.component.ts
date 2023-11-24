import { Component, Input } from '@angular/core';
import { ContatoType } from 'src/types/curriculo';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {
  @Input() contato?: ContatoType;
}
