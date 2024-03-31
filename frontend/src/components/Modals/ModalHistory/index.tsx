import type { ModalDialogProps } from 'src/components/Modals/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import Skeleton from 'src/components/Skeleton'
import HistoryItem from 'src/components/HistoryItem'

import { useModalHistory } from 'src/components/Modals/ModalHistory/useModalHistory'

import s from 'src/components/Modals/ModalHistory/styles.module.scss'

const ModalHistory = ({ isOpen, closeModal }: ModalDialogProps): JSX.Element => {
  const { data, isLoading } = useModalHistory()

  return (
    <SettingsModalsLayout
      title="History"
      isOpen={isOpen}
      closeModal={closeModal}
      Button={<></>}
    >
      <Skeleton
        dataLength={data.length}
        isLoading={isLoading}
        className={s.skeleton}
      >
        <ul className={s.historyContainer + ' scroll-y'}>
          {data.map(item => (
            <HistoryItem {...item} key={item.id} />
          ))}
        </ul>
      </Skeleton>
    </SettingsModalsLayout>
  )
}

export default ModalHistory
