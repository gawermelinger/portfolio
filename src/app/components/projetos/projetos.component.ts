import { Component, Input } from '@angular/core';
import { ProjetoType } from 'src/types/curriculo';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  @Input() projetos?: ProjetoType[];
}
