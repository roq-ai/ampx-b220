import { EmergencyInterface } from 'interfaces/emergency';
import { ServiceHistoryInterface } from 'interfaces/service-history';
import { VehicleInterface } from 'interfaces/vehicle';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface ServiceRequestInterface {
  id?: string;
  vehicle_id: string;
  provider_id: string;
  service_type: string;
  location: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  emergency?: EmergencyInterface[];
  service_history?: ServiceHistoryInterface[];
  vehicle?: VehicleInterface;
  provider?: ProviderInterface;
  _count?: {
    emergency?: number;
    service_history?: number;
  };
}

export interface ServiceRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
  provider_id?: string;
  service_type?: string;
  location?: string;
  status?: string;
}
