import type { ReactNode } from 'react'

export type HistoryT = {
  id: string
  text: string[]
  createdAt: string
  task: CardT
}

export type CardT = {
  id: string
  title: string
  status: string
  dueDate: string
  priority: 'Low' | 'Medium' | 'High'
  section: Pick<SectionT, 'id' | 'name'>
  description: string
}

export type SectionT = {
  id: string
  name: string
}

export type ValueOf<T extends string> = `${T}`

export type ReactChildrenT = {
  children: ReactNode
}

export type UnionToIntersection<U> = (
  U extends object ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never
