import { IAgendamento } from '../interface/IAgendamento';

export class AgendamentoDTO implements IAgendamento {
  medico_id: number;
  paciente_nome: string;
  data_horario: string;

  constructor(data: IAgendamento) {
    this.medico_id = data.medico_id;
    this.paciente_nome = data.paciente_nome;
    this.data_horario = data.data_horario;
  }
}
