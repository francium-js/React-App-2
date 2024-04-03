import { render, screen } from '@testing-library/react'

import type { EditorFormSwitcherProps } from 'src/components/EditorFormSwitcher/types'

import EditorFormSwitcher from 'src/components/EditorFormSwitcher'

const goToEdit: EditorFormSwitcherProps = {
  isDirty: false,
  isLoading: false,
  isEditor: true,
  onConfirm: () => {},
  toogle: (value = true) => {
    return value
  },
}

const goBackToTask: EditorFormSwitcherProps = {
  isDirty: false,
  isLoading: false,
  isEditor: false,
  onConfirm: () => {},
  toogle: (value = true) => {
    return value
  },
}

const editTask: EditorFormSwitcherProps = {
  isDirty: true,
  isLoading: false,
  isEditor: true,
  onConfirm: () => {},
  toogle: (value = true) => {
    return value
  },
}

const buttonDisabled: EditorFormSwitcherProps = {
  isDirty: true,
  isLoading: true,
  isEditor: true,
  onConfirm: () => {},
  toogle: (value = true) => {
    return value
  },
}

describe('EditorFormSwitcher Component', () => {
  it('Button must be RED', () => {
    render(<EditorFormSwitcher {...goToEdit} />)
    const button = screen.getByTestId('buttonConfirm')

    const buttonStyle = window.getComputedStyle(button)
    const { backgroundColor } = buttonStyle

    expect(backgroundColor).toBe('red')
  })

  it('Button must be nav to taskInfo', () => {
    render(<EditorFormSwitcher {...goBackToTask} />)
    const buttonEdit = screen.queryByTestId('buttonEdit')

    expect(buttonEdit).toBeTruthy()
  })

  it('Button must be GREEN', () => {
    render(<EditorFormSwitcher {...editTask} />)
    const button = screen.getByTestId('buttonConfirm')

    const buttonStyle = window.getComputedStyle(button)
    const { backgroundColor } = buttonStyle

    expect(backgroundColor).toBe('green')
  })

  it('Button mist be dissabled', () => {
    render(<EditorFormSwitcher {...buttonDisabled} />)
    const button = screen.getByTestId('buttonConfirm') as HTMLButtonElement

    expect(button.disabled).toBe(true)
  })
})
