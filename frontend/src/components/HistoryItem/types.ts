import type { HTMLProps } from 'react'

import type { HistoryT } from 'src/types'

export type HistoryItemProps = HistoryT & HTMLProps<HTMLLIElement>
