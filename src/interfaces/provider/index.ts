import { ServiceHistoryInterface } from 'interfaces/service-history';
import { ServiceRequestInterface } from 'interfaces/service-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProviderInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  service_history?: ServiceHistoryInterface[];
  service_request?: ServiceRequestInterface[];
  user?: UserInterface;
  _count?: {
    service_history?: number;
    service_request?: number;
  };
}

export interface ProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
