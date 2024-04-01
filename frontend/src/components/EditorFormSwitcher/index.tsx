import { GiConfirmed } from 'react-icons/gi'
import { FiEdit } from 'react-icons/fi'

import type { UseEditorFormSwitcher } from 'src/components/EditorFormSwitcher/types'

import s from 'src/components/EditorFormSwitcher/styles.module.scss'

const EditorFormSwitcher = ({
  isEditor,
  isLoading,
  isDirty,
  onConfirm,
  toogle,
}: UseEditorFormSwitcher): JSX.Element => {
  return (
    <div className={s.editButton_Wrapper}>
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
        <button onClick={() => toogle(true)}>
          <FiEdit size={30} />
        </button>
      )}
    </div>
  )
}

export default EditorFormSwitcher
