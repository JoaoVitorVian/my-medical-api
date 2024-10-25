import { APIGatewayProxyHandler } from 'aws-lambda';
import { AgendaService } from '../service/AgendaService';

export const getAgendas: APIGatewayProxyHandler = async () => {
  const agendas = AgendaService.getAgendas();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos: agendas }),
  };
};
