interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Service Technician'],
  tenantName: 'Provider',
  applicationName: 'AMPX',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user', 'Manage provider', 'Manage vehicle', 'Manage service request'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a930983e-112b-49ea-86cf-4a16840f2016',
};
