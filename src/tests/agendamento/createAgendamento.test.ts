import { AgendamentoService } from './../../agendamento/service/AgendamentoService';
import { AgendamentoDTO } from './../../agendamento/dto/AgendamentoDTO';

test('deve realizar o agendamento com sucesso', () => {
  const agendamentoData = new AgendamentoDTO({
    medico_id: 1,
    paciente_nome: 'Carlos Almeida',
    data_horario: '2024-10-05 09:00',
  });
  const response = AgendamentoService.createAgendamento(agendamentoData);
  expect(response.mensagem).toBe('Agendamento realizado com sucesso');
});

test('deve lançar erro se o horário não estiver disponível', () => {
  const agendamentoData = new AgendamentoDTO({
    medico_id: 1,
    paciente_nome: 'Carlos Almeida',
    data_horario: '2024-10-05 12:00',
  });
  expect(() => AgendamentoService.createAgendamento(agendamentoData)).toThrow('Horário indisponível ou médico não encontrado');
});
