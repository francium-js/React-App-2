import { GiConfirmed } from 'react-icons/gi'
import { FiEdit } from 'react-icons/fi'

import type { EditorFormSwitcherProps } from 'src/components/EditorFormSwitcher/types'

import s from 'src/components/EditorFormSwitcher/styles.module.scss'

const EditorFormSwitcher = ({
  isEditor,
  isLoading,
  isDirty,
  onConfirm,
  toogle,
}: EditorFormSwitcherProps): JSX.Element => {
  const bgColor = !isDirty || isLoading ? 'red' : 'green'

  return (
    <div className={s.editButton_Wrapper}>
      {isEditor ? (
        <button
          data-testid="buttonConfirm"
          style={{
            backgroundColor: bgColor,
          }}
          disabled={isLoading}
          onClick={onConfirm}
        >
          <GiConfirmed size={30} />
        </button>
      ) : (
        <button data-testid="buttonEdit" onClick={() => toogle(true)}>
          <FiEdit size={30} />
        </button>
      )}
    </div>
  )
}

export default EditorFormSwitcher
