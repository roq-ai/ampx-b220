import { ServiceRequestInterface } from 'interfaces/service-request';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface ServiceHistoryInterface {
  id?: string;
  service_request_id: string;
  provider_id: string;
  start_time: any;
  end_time?: any;
  created_at?: any;
  updated_at?: any;

  service_request?: ServiceRequestInterface;
  provider?: ProviderInterface;
  _count?: {};
}

export interface ServiceHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_request_id?: string;
  provider_id?: string;
}
