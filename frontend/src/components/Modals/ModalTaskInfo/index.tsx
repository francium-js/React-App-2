import { FiEdit } from 'react-icons/fi'
import { GiConfirmed } from 'react-icons/gi'

import type { ModalTaskInfoProps } from 'src/components/Modals/ModalTaskInfo/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import FormTaskCard from 'src/components/FormTaskCard'
import TaskCardInfo from 'src/components/TaskCardInfo'
import HistoryItem from 'src/components/HistoryItem'
import Skeleton from 'src/components/Skeleton'

import { useModalTaskInfo } from 'src/components/Modals/ModalTaskInfo/useModalTaskInfo'

import s from 'src/components/Modals/ModalTaskInfo/styles.module.scss'

const ModalTaskInfo = ({
  isOpen,
  closeModal,
  data,
}: ModalTaskInfoProps): JSX.Element => {
  const {
    historyData,
    historyIsLoading,
    errors,
    control,
    isLoading,
    isDirty,
    isEditor,
    useIsEditor,
    onConfirm,
  } = useModalTaskInfo(data)

  return (
    <SettingsModalsLayout
      title={isEditor ? 'Task editor' : 'Task info'}
      isOpen={isOpen}
      closeModal={closeModal}
      Button={<></>}
    >
      <div className={s.container}>
        <div className={s.cardFormWrapper}>
          {isEditor ? (
            <FormTaskCard errors={errors} control={control} />
          ) : (
            <TaskCardInfo {...data} />
          )}

          <div className={s.editButtonWrapper}>
            {isEditor ? (
              <button
                style={{
                  backgroundColor: !isDirty || isLoading ? '#f32d2d' : '#3bdf43',
                }}
                disabled={isLoading}
                onClick={onConfirm}
              >
                <GiConfirmed size={30} />
              </button>
            ) : (
              <button onClick={() => useIsEditor(true)}>
                <FiEdit size={30} />
              </button>
            )}
          </div>
        </div>

        <div className={s.historyContainer}>
          <h3>Activity</h3>
          <Skeleton
            className={s.skeleton}
            isLoading={historyIsLoading}
            dataLength={historyData.length}
            size={32}
          >
            <ul className={'scroll-y'}>
              {historyData.map(item => (
                <HistoryItem {...item} key={item.id} />
              ))}
            </ul>
          </Skeleton>
        </div>
      </div>
    </SettingsModalsLayout>
  )
}

export default ModalTaskInfo
