import queryString from 'query-string';
import { ServiceRequestInterface, ServiceRequestGetQueryInterface } from 'interfaces/service-request';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceRequests = async (
  query?: ServiceRequestGetQueryInterface,
): Promise<PaginatedInterface<ServiceRequestInterface>> => {
  return fetcher('/api/service-requests', {}, query);
};

export const createServiceRequest = async (serviceRequest: ServiceRequestInterface) => {
  return fetcher('/api/service-requests', { method: 'POST', body: JSON.stringify(serviceRequest) });
};

export const updateServiceRequestById = async (id: string, serviceRequest: ServiceRequestInterface) => {
  return fetcher(`/api/service-requests/${id}`, { method: 'PUT', body: JSON.stringify(serviceRequest) });
};

export const getServiceRequestById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/service-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceRequestById = async (id: string) => {
  return fetcher(`/api/service-requests/${id}`, { method: 'DELETE' });
};
