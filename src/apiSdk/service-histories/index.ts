import queryString from 'query-string';
import { ServiceHistoryInterface, ServiceHistoryGetQueryInterface } from 'interfaces/service-history';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceHistories = async (
  query?: ServiceHistoryGetQueryInterface,
): Promise<PaginatedInterface<ServiceHistoryInterface>> => {
  return fetcher('/api/service-histories', {}, query);
};

export const createServiceHistory = async (serviceHistory: ServiceHistoryInterface) => {
  return fetcher('/api/service-histories', { method: 'POST', body: JSON.stringify(serviceHistory) });
};

export const updateServiceHistoryById = async (id: string, serviceHistory: ServiceHistoryInterface) => {
  return fetcher(`/api/service-histories/${id}`, { method: 'PUT', body: JSON.stringify(serviceHistory) });
};

export const getServiceHistoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/service-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceHistoryById = async (id: string) => {
  return fetcher(`/api/service-histories/${id}`, { method: 'DELETE' });
};
