import { ServiceRequestInterface } from 'interfaces/service-request';
import { GetQueryInterface } from 'interfaces';

export interface EmergencyInterface {
  id?: string;
  service_request_id: string;
  emergency_type: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  service_request?: ServiceRequestInterface;
  _count?: {};
}

export interface EmergencyGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_request_id?: string;
  emergency_type?: string;
  status?: string;
}
