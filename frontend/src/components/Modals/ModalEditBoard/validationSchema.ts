import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name board is required')
    .trim()
    .max(50, 'Name board must be at most 50 characters'),
})
