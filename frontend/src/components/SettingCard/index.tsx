import { FiEdit } from 'react-icons/fi'
import { FaRegTrashCan } from 'react-icons/fa6'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiSettings } from 'react-icons/ci'

import type { SettingCardProps } from 'src/components/SettingCard/types'

import { useSettingCard } from 'src/components/SettingCard/useSettingCard'

import s from 'src/components/SettingCard/styles.module.scss'

const SettingCard = ({ onEdit, onDelete, onAdd }: SettingCardProps): JSX.Element => {
  const { vanish, setVanish, settingCardRef } = useSettingCard()

  return (
    <div
      className={s.container}
      ref={settingCardRef}
      onClick={e => e.stopPropagation()}
    >
      <div
        className={s.iconWrapper}
        onClick={() => {
          setVanish(!vanish)
        }}
      >
        <CiSettings size={28} />
      </div>
      <div
        className={s.buttonContainer}
        style={{ display: vanish ? 'flex' : 'none' }}
      >
        <button
          type="button"
          onClick={() => {
            onEdit()
            setVanish(!vanish)
          }}
        >
          <FiEdit size={20} />
          Edit
        </button>
        {onAdd && (
          <button
            type="button"
            onClick={() => {
              onAdd()
              setVanish(!vanish)
            }}
          >
            <AiOutlinePlus size={20} />
            Add new card
          </button>
        )}
        <button
          className="text-red-600"
          type="button"
          onClick={() => {
            onDelete()
            setVanish(!vanish)
          }}
        >
          <FaRegTrashCan size={20} fill="red" />
          Delete
        </button>
      </div>
    </div>
  )
}

export default SettingCard
