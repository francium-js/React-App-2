import type { InputProps } from 'src/components/Input/types'

import s from 'src/components/Input/styles.module.scss'

const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <div className={s.container}>
      <input {...props}></input>
    </div>
  )
}

export default Input
