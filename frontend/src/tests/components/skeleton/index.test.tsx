import { render } from '@testing-library/react'
import Skeleton from 'src/components/Skeleton'

describe('Skeleton Component', () => {
  // it('renders loading skeleton when isLoading is true', () => {
  //   const { container } = render(
  //     <Skeleton isLoading={true} dataLength={0}></Skeleton>,
  //   )
  //   expect(container.querySelectorAll('#skeleton').length).toBe(1)
  // })
  // it('renders children when isLoading is false and dataLength is greater than 0', () => {
  //   const { container } = render(
  //     <Skeleton isLoading={false} dataLength={1}>
  //       <div>Children content</div>
  //     </Skeleton>,
  //   )
  //   expect(container.textContent).toContain('Children content')
  // })
  // it('renders NoDataInfo component when isLoading is false and dataLength is 0', () => {
  //   const { container } = render(<Skeleton isLoading={false} dataLength={0} />)
  //   expect(container.textContent).toContain('Empty')
  // })
})
