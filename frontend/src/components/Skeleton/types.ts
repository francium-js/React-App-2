import type { HTMLProps } from 'react'

export type SkeletonProps = {
  size?: number
  skeletonLength?: number
  dataLength: number
  isLoading: boolean | number
} & HTMLProps<HTMLDivElement>
