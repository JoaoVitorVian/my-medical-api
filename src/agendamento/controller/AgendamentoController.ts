import { APIGatewayProxyHandler } from 'aws-lambda';
import { AgendamentoService } from '../service/AgendamentoService';
import { AgendamentoDTO } from '../dto/AgendamentoDTO';

export const createAgendamento: APIGatewayProxyHandler = async (event: { body: any; }) => {
  try {
    const data = JSON.parse(event.body || '{}');
    const agendamentoData = new AgendamentoDTO(data);
    const response = AgendamentoService.createAgendamento(agendamentoData);
    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      body: JSON.stringify({ mensagem: error.message }),
    };
  }
};
