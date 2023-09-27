import { ServiceRequestInterface } from 'interfaces/service-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  license_plate: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  service_request?: ServiceRequestInterface[];
  user?: UserInterface;
  _count?: {
    service_request?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  user_id?: string;
}
