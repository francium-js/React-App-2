import { FiEdit } from 'react-icons/fi'
import { FaRegTrashCan } from 'react-icons/fa6'

import { useBoardListPage } from 'src/pages/BoardListPage/useBoardListPage'

import Skeleton from 'src/components/Skeleton'
import Button from 'src/components/Button'

import { Modals } from 'src/components/Modals/constants'

import s from 'src/pages/BoardListPage/styles.module.scss'

const BoardListPage = (): JSX.Element => {
  const { openBoardEdit, deleteBoard, navigate, onOpen, data, isLoading } =
    useBoardListPage()

  return (
    <div className={s.container}>
      <h2>Board list :</h2>
      <Skeleton
        className={s.skeleton}
        isLoading={isLoading}
        dataLength={data.length}
        size={25}
      >
        <div className={'scroll-y'}>
          {data.map(item => (
            <Button
              className={s.button}
              key={item.id}
              leftIcon={
                <FaRegTrashCan
                  size={25}
                  fill="red"
                  onClick={e => {
                    e.stopPropagation()
                    deleteBoard(item.id)
                  }}
                />
              }
              rightIcon={
                <FiEdit
                  size={25}
                  onClick={e => {
                    e.stopPropagation()
                    openBoardEdit(item.id)
                  }}
                />
              }
              onClick={() => {
                navigate(`/${item.id}`)
              }}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </Skeleton>
      <button
        className={s.createBoard}
        onClick={() => onOpen({ name: Modals.CREATE_NEW_BOARD })}
      >
        + Create new board
      </button>
    </div>
  )
}

export default BoardListPage
