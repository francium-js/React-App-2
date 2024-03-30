import { FiEdit } from 'react-icons/fi'
import { FaRegTrashCan } from 'react-icons/fa6'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiSettings } from 'react-icons/ci'

import type { SettingCardProps } from 'src/components/SettingCard/types'

import { useSettingCard } from 'src/components/SettingCard/useSettingCard'

import {
  Container,
  ButtonContainer,
  IconWrapper,
} from 'src/components/SettingCard/styles'

const SettingCard = ({ onEdit, onDelete, onAdd }: SettingCardProps): JSX.Element => {
  const { vanish, setVanish, settingCardRef } = useSettingCard()

  return (
    <Container ref={settingCardRef} onClick={e => e.stopPropagation()}>
      <IconWrapper
        onClick={() => {
          setVanish(!vanish)
        }}
      >
        <CiSettings size={28} />
      </IconWrapper>
      <ButtonContainer style={{ display: vanish ? 'flex' : 'none' }}>
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
          id="deleteButton"
          type="button"
          onClick={() => {
            onDelete()
            setVanish(!vanish)
          }}
        >
          <FaRegTrashCan size={20} fill="red" />
          Delete
        </button>
      </ButtonContainer>
    </Container>
  )
}

export default SettingCard
