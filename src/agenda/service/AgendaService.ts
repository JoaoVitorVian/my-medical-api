import { IAgenda } from '../interface/IAgenda';
import { mockMedicos } from '../mocks/AgendaMock';

export class AgendaService {
  static getAgendas(): IAgenda[] {
    return mockMedicos;
  }
}
