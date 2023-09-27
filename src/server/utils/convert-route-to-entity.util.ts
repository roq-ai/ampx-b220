const mapping: Record<string, string> = {
  emergencies: 'emergency',
  providers: 'provider',
  'service-histories': 'service_history',
  'service-requests': 'service_request',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
