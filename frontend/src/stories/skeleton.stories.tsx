import Skeleton from 'src/components/Skeleton'

import type { Meta } from '@storybook/react'
import type { SkeletonProps } from 'src/components/Skeleton/types'

import 'src/App.css'
import 'src/index.css'

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Skeleton for loading and checking data in project',
      },
    },
  },
}

export default meta

export const Loading = (args: SkeletonProps) => <Skeleton {...args} />

Loading.args = {
  isLoading: true,
  dataLength: 0,
}

export const NoData = (args: SkeletonProps) => <Skeleton {...args} />

NoData.args = {
  isLoading: false,
  dataLength: 0,
}

export const ReturnData = (args: SkeletonProps) => (
  <Skeleton {...args}>
    <ul style={{ padding: 5 }}>
      <li>
        <button style={{ padding: 5 }}>Any Data</button>
      </li>
      <li>
        <div style={{ padding: 5 }}>Any Data</div>
      </li>
    </ul>
  </Skeleton>
)

ReturnData.args = {
  isLoading: false,
  dataLength: 1,
}
