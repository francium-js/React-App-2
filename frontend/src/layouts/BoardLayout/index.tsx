import { Outlet } from 'react-router-dom'

import ModalProvider from 'src/contexts/ModalProvider'

const BoardLayout = (): JSX.Element => {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  )
}

export default BoardLayout
