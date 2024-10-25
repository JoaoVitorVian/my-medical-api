import { AgendamentoDTO } from '../dto/AgendamentoDTO';
import { IAgendamentoResponse } from '../interface/IAgendamento';
import { mockMedicos } from '../../agenda/mocks/AgendaMock';

export class AgendamentoService {
  static createAgendamento(data: AgendamentoDTO): IAgendamentoResponse {
    const medico = mockMedicos.find(m => m.id === data.medico_id);
    if (!medico || !medico.horarios_disponiveis.includes(data.data_horario)) {
      throw new Error('Horário indisponível ou médico não encontrado');
    }

    return {
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: {
        medico: medico.nome,
        paciente: data.paciente_nome,
        data_horario: data.data_horario,
      },
    };
  }
}
