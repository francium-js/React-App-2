import type { Control, FieldErrors } from 'react-hook-form'

type ActionByNameT = {
  name: string
}

export type FormNameProps = {
  errors: FieldErrors<ActionByNameT>
  control: Control<ActionByNameT, any>
}
