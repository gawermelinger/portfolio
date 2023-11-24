type Contatos = {
  urlLinkedin: string;
  urlGit: string;
  // urlIcon: string;
};

export type DadosBasicosType = {
  nome: string;
  cargo: string;
  perfil: string;
  contatos: Contatos[];
};

export type HabilidadesType = {
  nome: string;
  icone: string
};

export type ProjetoType = {
  titulo: string;
  urlRepo: string;
  tecnologias: string[];
};

export type ContatoType = {
  telefone: string;
  email: string;
}

export type CurriculoType = {
  dadosBasicos: DadosBasicosType;
  habilidades: HabilidadesType[];
  projetos: ProjetoType[];
  contato: ContatoType;
};
