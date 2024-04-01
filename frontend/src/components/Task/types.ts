import type { HTMLProps } from 'react'

import type { TaskT } from 'src/types'

export type TaskProps = TaskT & HTMLProps<HTMLDivElement>
