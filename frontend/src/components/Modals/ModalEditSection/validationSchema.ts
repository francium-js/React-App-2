import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name section is required')
    .trim()
    .max(50, 'Name section must be at most 50 characters'),
})
