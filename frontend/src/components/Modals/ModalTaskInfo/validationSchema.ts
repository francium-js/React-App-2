import * as yup from 'yup'

export const schema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .trim()
    .max(50, 'Title must be at most 50 characters'),
  sectionId: yup.string().required('Status is required').trim(),
  description: yup.string().required('Description is required').trim(),
  dueDate: yup
    .string()
    .matches(/\d{4}-\d{2}-\d{2}/, 'Invalid due date format')
    .required('Due date is required'),
  priority: yup
    .string()
    .oneOf(['Low', 'Medium', 'High'], 'Invalid priority')
    .required('Priority is required'),
})
