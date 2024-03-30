export type ModalProviderProps = {
  children: React.ReactNode
}

export type ModalContextProps = {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}
