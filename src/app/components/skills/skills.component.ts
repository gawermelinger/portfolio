import { Component, Input } from '@angular/core';
import { HabilidadesType } from 'src/types/curriculo';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() habilidades?: HabilidadesType[];
}
