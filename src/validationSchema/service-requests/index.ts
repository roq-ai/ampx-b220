import * as yup from 'yup';

export const serviceRequestValidationSchema = yup.object().shape({
  service_type: yup.string().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  vehicle_id: yup.string().nullable().required(),
  provider_id: yup.string().nullable().required(),
});
