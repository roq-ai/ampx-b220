import * as yup from 'yup';

export const emergencyValidationSchema = yup.object().shape({
  emergency_type: yup.string().required(),
  status: yup.string().required(),
  service_request_id: yup.string().nullable().required(),
});
