import { AgendaService } from '../../agenda/service/AgendaService';

test('deve retornar a lista de médicos', () => {
  const agendas = AgendaService.getAgendas();
  expect(agendas).toHaveLength(2);
});
