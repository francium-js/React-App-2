import { MdHistory } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoArrowBack } from 'react-icons/io5'

import Button from 'src/components/Button'

import { Modals } from 'src/components/Modals/constants'
import { userControlPanel } from 'src/components/ControlPanel/useControlPanel'

import s from 'src/components/ControlPanel/styles.module.scss'

const ControlPanel = (): JSX.Element => {
  const { onOpen, navigate } = userControlPanel()

  return (
    <div className={s.container}>
      <Button
        style={{ backgroundColor: 'white', border: 'none' }}
        leftIcon={<IoArrowBack />}
        onClick={() => {
          navigate(-1)
        }}
      >
        Go back
      </Button>
      <div className={s.buttonsContainer}>
        <Button
          style={{ backgroundColor: 'white', border: 'none' }}
          leftIcon={<MdHistory />}
          onClick={() => {
            onOpen({ name: Modals.ALL_HISTORY })
          }}
        >
          History
        </Button>
        <Button
          style={{
            backgroundColor: '#30406e',
            color: 'white',
            border: 'none',
          }}
          leftIcon={<AiOutlinePlus fill="white" />}
          onClick={() => {
            onOpen({ name: Modals.CREATE_NEW_SECTION })
          }}
        >
          Create new list
        </Button>
      </div>
    </div>
  )
}

export default ControlPanel
