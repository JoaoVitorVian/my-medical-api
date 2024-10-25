export interface IAgendamento {
    medico_id: number;
    paciente_nome: string;
    data_horario: string;
  }
  
  export interface IAgendamentoResponse {
    mensagem: string;
    agendamento: {
      medico: string;
      paciente: string;
      data_horario: string;
    };
  }
  