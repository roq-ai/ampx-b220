import queryString from 'query-string';
import { EmergencyInterface, EmergencyGetQueryInterface } from 'interfaces/emergency';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmergencies = async (
  query?: EmergencyGetQueryInterface,
): Promise<PaginatedInterface<EmergencyInterface>> => {
  return fetcher('/api/emergencies', {}, query);
};

export const createEmergency = async (emergency: EmergencyInterface) => {
  return fetcher('/api/emergencies', { method: 'POST', body: JSON.stringify(emergency) });
};

export const updateEmergencyById = async (id: string, emergency: EmergencyInterface) => {
  return fetcher(`/api/emergencies/${id}`, { method: 'PUT', body: JSON.stringify(emergency) });
};

export const getEmergencyById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/emergencies/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmergencyById = async (id: string) => {
  return fetcher(`/api/emergencies/${id}`, { method: 'DELETE' });
};
