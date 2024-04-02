import { VscLoading } from 'react-icons/vsc'

import type { ReactNode } from 'react'
import type { SkeletonProps } from 'src/components/Skeleton/types'

import NoDataInfo from 'src/components/NoDataInfo'

import s from 'src/components/Skeleton/styles.module.scss'

const Skeleton = ({
  size = 50,
  skeletonLength = 3,
  isLoading,
  dataLength,
  children,
  ...props
}: SkeletonProps): ReactNode | JSX.Element => {
  if (isLoading) {
    return (
      <div id="#skeleton" {...props}>
        {Array.from({ length: skeletonLength }).map((_, i) => (
          <div className={s.loadingContainer} key={i}>
            <VscLoading className={s.loading} size={size} />
          </div>
        ))}
      </div>
    )
  }

  if (!dataLength) {
    return <NoDataInfo text={'Empty'} />
  }

  return children
}

export default Skeleton
