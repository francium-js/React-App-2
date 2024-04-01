import { Controller } from 'react-hook-form'

import type { FormNameProps } from 'src/components/FormName/types'

import Input from 'src/components/Input'

const FormName = ({ control, errors }: FormNameProps): JSX.Element => {
  return (
    <Controller
      control={control}
      name="name"
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          type="text"
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Enter section name"
          style={{ border: errors.name && 'solid 2px red' }}
        />
      )}
    />
  )
}

export default FormName
