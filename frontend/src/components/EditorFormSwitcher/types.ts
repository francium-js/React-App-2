export type EditorFormSwitcherProps = {
  isEditor?: boolean
  isLoading: boolean
  isDirty: boolean
  onConfirm: () => void
  toogle: (value: boolean) => void
}
