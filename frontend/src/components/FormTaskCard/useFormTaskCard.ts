import { useAppSelector } from 'src/redux/store'

export const useFormTaskCard = () => {
  const { data } = useAppSelector(state => state.section)

  const statusArray = data.map(item => {
    return { name: item.name, id: item.id }
  })

  return { statusArray }
}
