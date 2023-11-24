import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from '../contatos/contatos.component';
import { HomeComponent } from '../home/home.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjetosComponent } from '../projetos/projetos.component';

@NgModule({
  declarations: [
    ContatosComponent,
    HomeComponent,
    PerfilComponent,
    SkillsComponent,
    ProjetosComponent,
  ],
  imports: [CommonModule],
  exports: [
    ContatosComponent,
    HomeComponent,
    PerfilComponent,
    SkillsComponent,
    ProjetosComponent,
  ],
})
export class ComponentModule {}
