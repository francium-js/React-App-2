import type { ModalDialogProps } from 'src/components/Modals/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import HistoryItem from 'src/components/HistoryItem'

import { useModalHistory } from 'src/components/Modals/ModalHistory/useModalHistory'

import { HostiryContainer } from 'src/components/Modals/ModalHistory/styles'
import NoDataInfo from 'src/components/NoDataInfo'

const ModalHistory = ({ isOpen, closeModal }: ModalDialogProps): JSX.Element => {
  const { data } = useModalHistory()

  return (
    <SettingsModalsLayout
      title="History"
      isOpen={isOpen}
      closeModal={closeModal}
      Button={<></>}
    >
      <HostiryContainer>
        {!data.length ? (
          <NoDataInfo color="#282c2f" text="No history" />
        ) : (
          data.map(item => <HistoryItem {...item} key={item.id} />)
        )}
      </HostiryContainer>
    </SettingsModalsLayout>
  )
}

export default ModalHistory
