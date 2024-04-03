import { render, screen } from '@testing-library/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

import ModalProvider from 'src/contexts/ModalProvider'
import { store } from 'src/redux/store'

import { useModals } from 'src/contexts/ModalProvider/useModals'

import { Modals } from 'src/components/Modals/constants'

const data = {
  isEdit: true,
  id: '1',
  title: 'title',
  status: 'status',
  description: 'description',
  priority: 'High' as const,
  dueDate: '1873485357',
  section: { id: '1', name: 'section' },
}

const CallModalTaskInfo = () => {
  const { onOpen } = useModals()

  useEffect(() => {
    onOpen({ name: Modals.TASK_INFO, data })
  }, [])

  return <></>
}

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ModalProvider>
        <CallModalTaskInfo />
      </ModalProvider>
    </Provider>
  )
}

beforeAll(() => {
  const rootDiv = document.createElement('div')
  rootDiv.id = 'root'
  document.body.appendChild(rootDiv)

  const modalRoot = document.createElement('div')
  modalRoot.id = 'modal-root'
  document.body.appendChild(modalRoot)
})

afterAll(() => {
  const root = document.getElementById('root')

  if (root) {
    document.body.removeChild(root)
  }
})

describe('ModalTaskInfo Component', () => {
  it('ModalTaskInfo with editor', () => {
    render(<App />)

    const modal = screen.getByTestId('editorOn')
    expect(modal).toBeTruthy()
  })

  it('ModalTaskInfo with not editor', () => {
    data.isEdit = false

    render(<App />)
    const modal = screen.getByTestId('editorOff')
    expect(modal).toBeTruthy()
  })
})
