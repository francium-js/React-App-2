import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import s from 'src/components/Loading/styles.module.scss'

const Loading = (): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.iconWrapper}>
        <AiOutlineLoading3Quarters fill="white" size={40} />
      </div>
      Loading...
    </div>
  )
}

export default Loading
