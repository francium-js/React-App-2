import { FiEdit } from 'react-icons/fi'
import { GiConfirmed } from 'react-icons/gi'

import type { ModalTaskInfoProps } from 'src/components/Modals/ModalTaskInfo/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import TaskCardInfo from 'src/components/TaskCardInfo'
import HistoryItem from 'src/components/HistoryItem'
import NoDataInfo from 'src/components/NoDataInfo'
import FormTaskCard from 'src/components/FormTaskCard'

import { useModalTaskInfo } from 'src/components/Modals/ModalTaskInfo/useModalTaskInfo'

import {
  Container,
  TaskHistory,
  EditButtonWrapper,
  CardFormWrapper,
} from 'src/components/Modals/ModalTaskInfo/styles'

const ModalTaskInfo = ({
  isOpen,
  closeModal,
  data,
}: ModalTaskInfoProps): JSX.Element => {
  const {
    historyData,
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
      <Container>
        {
          <CardFormWrapper>
            {isEditor ? (
              <FormTaskCard errors={errors} control={control} />
            ) : (
              <TaskCardInfo {...data} />
            )}

            <EditButtonWrapper>
              {isEditor ? (
                <button
                  style={{
                    backgroundColor: !isDirty || isLoading ? '#d80d0d' : '#47b94d',
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
            </EditButtonWrapper>
          </CardFormWrapper>
        }

        <TaskHistory>
          <h3>Activity</h3>
          <ul>
            {!historyData.length ? (
              <NoDataInfo color="#282c2f" text="No history" />
            ) : (
              historyData.map(item => <HistoryItem {...item} key={item.id} />)
            )}
          </ul>
        </TaskHistory>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalTaskInfo
