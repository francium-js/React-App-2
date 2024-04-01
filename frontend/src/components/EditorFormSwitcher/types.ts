export type UseEditorFormSwitcher = {
  isEditor: boolean | undefined
  isLoading: boolean
  isDirty: boolean
  onConfirm: () => void
  toogle: (value: boolean) => void
}
