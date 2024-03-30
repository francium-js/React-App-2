import { Controller } from 'react-hook-form'
import { FiCrosshair } from 'react-icons/fi'
import { LuCalendarRange } from 'react-icons/lu'
import { FiTag } from 'react-icons/fi'

import type { FormTaskCardProps } from 'src/components/FormTaskCard/types'

import Input from 'src/components/Input'

import { useFormTaskCard } from 'src/components/FormTaskCard/useFormTaskCard'

import { dateForCalendar, spliceName } from 'src/helpers'

import {
  Container,
  ItemFormWrapper,
  Select,
  TextArea,
  ParamsContainer,
  Description,
} from 'src/components/FormTaskCard/styles'

const FormTaskCard = ({
  errors,
  control,
  status,
  ...props
}: FormTaskCardProps): JSX.Element => {
  const { statusArray } = useFormTaskCard()

  return (
    <Container {...props}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <ItemFormWrapper>
            <Input
              type="text"
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Task name"
              style={{
                border: errors.title && 'solid 2px red',
                width: '240px',
                height: '42px',
              }}
            />
          </ItemFormWrapper>
        )}
      />
      <ParamsContainer>
        <ul>
          <li>
            <FiCrosshair size={20} />
            <p>Status :</p>
          </li>
          <li>
            <LuCalendarRange size={20} />
            <p>Due date :</p>
          </li>
          <li>
            <FiTag size={20} />
            <p>Priority :</p>
          </li>
        </ul>
        <ul>
          <li>
            {status ? (
              spliceName(status, 30)
            ) : (
              <Controller
                control={control}
                name="sectionId"
                render={({ field: { onChange, onBlur, value } }) => (
                  <ItemFormWrapper>
                    <Select
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      style={{
                        fontSize: 15,
                        border: errors.priority && 'solid 2px red',
                      }}
                    >
                      {statusArray.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {spliceName(name, 15)}
                        </option>
                      ))}
                    </Select>
                  </ItemFormWrapper>
                )}
              />
            )}
          </li>
          <li>
            <Controller
              control={control}
              name="dueDate"
              render={({ field: { onChange, onBlur, value } }) => (
                <ItemFormWrapper>
                  <Input
                    type="date"
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Task name"
                    min={dateForCalendar()}
                    style={{
                      fontSize: 15,
                      padding: '0px 5px',
                      border: errors.dueDate && 'solid 2px red',
                    }}
                  />
                </ItemFormWrapper>
              )}
            />
          </li>
          <li>
            <Controller
              control={control}
              name="priority"
              render={({ field: { onChange, onBlur, value } }) => (
                <ItemFormWrapper>
                  <Select
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    style={{
                      fontSize: 15,
                      border: errors.priority && 'solid 2px red',
                    }}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </Select>
                </ItemFormWrapper>
              )}
            />
          </li>
        </ul>
      </ParamsContainer>

      <Description>
        <h3>Description</h3>

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <ItemFormWrapper>
              <TextArea
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                style={{ border: errors.description && 'solid 2px red' }}
              />
            </ItemFormWrapper>
          )}
        />
      </Description>
    </Container>
  )
}

export default FormTaskCard
