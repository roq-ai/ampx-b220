import * as yup from 'yup';

export const serviceHistoryValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  service_request_id: yup.string().nullable().required(),
  provider_id: yup.string().nullable().required(),
});
