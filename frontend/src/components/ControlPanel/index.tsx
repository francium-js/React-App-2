import { MdHistory } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import Button from 'src/components/Button'

import { Modals } from 'src/components/Modals/constants'
import { userControlPanel } from 'src/components/ControlPanel/useControlPanel'

import { Container, ButtonsWrapper } from 'src/components/ControlPanel/styles'

const ControlPanel = (): JSX.Element => {
  const { onOpen } = userControlPanel()

  return (
    <Container>
      <h1>My Task Board</h1>
      <ButtonsWrapper>
        <Button
          style={{ backgroundColor: 'white', border: 'none' }}
          text="History"
          leftIcon={<MdHistory />}
          onClick={() => {
            onOpen({ name: Modals.ALL_HISTORY })
          }}
        />
        <Button
          style={{
            backgroundColor: '#30406e',
            color: 'white',
            border: 'none',
          }}
          leftIcon={<AiOutlinePlus fill="white" />}
          text="Create new list"
          onClick={() => {
            onOpen({ name: Modals.CREATE_NEW_LIST })
          }}
        />
      </ButtonsWrapper>
    </Container>
  )
}

export default ControlPanel
