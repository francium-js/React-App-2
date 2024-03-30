import type { BoardSectionProps } from 'src/components/BoardSection/types'

import Button from 'src/components/Button'
import TaskCard from 'src/components/TaskCard'
import NoDataInfo from 'src/components/NoDataInfo'
import SettingCard from 'src/components/SettingCard'

import { spliceName } from 'src/helpers'

import { useBoardSection } from 'src/components/BoardSection/useBoardSection'

import {
  Container,
  Header,
  HeaderSetting,
  TaskWrapper,
  NoDataInfoWrapper,
} from 'src/components/BoardSection/styles'

const BoardSection = ({ sectionId, name }: BoardSectionProps): JSX.Element => {
  const { openModalNewCard, deleteSection, editSection, data } = useBoardSection(
    sectionId,
    name,
  )

  return (
    <Container>
      <Header>
        <h3>{spliceName(name, 15)}</h3>
        <HeaderSetting>
          <p>{data.length}</p>
          <SettingCard
            onEdit={editSection}
            onAdd={openModalNewCard}
            onDelete={deleteSection}
          />
        </HeaderSetting>
      </Header>
      <Button text="Add new card" onClick={openModalNewCard} />
      <TaskWrapper>
        {!data.length ? (
          <NoDataInfoWrapper>
            <NoDataInfo text="No card" color="#282c2f" />
          </NoDataInfoWrapper>
        ) : (
          data.map(item => <TaskCard key={item.id} {...item} />)
        )}
      </TaskWrapper>
    </Container>
  )
}

export default BoardSection
