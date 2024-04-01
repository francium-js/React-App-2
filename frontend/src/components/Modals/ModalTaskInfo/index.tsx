import type { ModalTaskInfoProps } from 'src/components/Modals/ModalTaskInfo/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import EditorFormSwitcher from 'src/components/EditorFormSwitcher'
import FormTask from 'src/components/FormTask'
import TaskInfo from 'src/components/TaskInfo'
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
        <div className={s.taskForm_Wrapper}>
          {isEditor ? (
            <FormTask errors={errors} control={control} />
          ) : (
            <TaskInfo {...data} />
          )}
          <EditorFormSwitcher
            isDirty={isDirty}
            isLoading={isLoading}
            isEditor={isEditor}
            toogle={useIsEditor}
            onConfirm={onConfirm}
          />
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
