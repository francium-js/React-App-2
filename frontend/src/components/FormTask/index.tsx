import { Controller } from 'react-hook-form'
import { FiCrosshair } from 'react-icons/fi'
import { LuCalendarRange } from 'react-icons/lu'
import { FiTag } from 'react-icons/fi'

import type { FormTaskProps } from 'src/components/FormTask/types'

import Input from 'src/components/Input'

import { useFormTask } from 'src/components/FormTask/useFormTask'

import { dateForCalendar, spliceText } from 'src/helpers'

import s from 'src/components/FormTask/styles.module.scss'

const FormTask = ({
  errors,
  control,
  status,
  ...props
}: FormTaskProps): JSX.Element => {
  const { statusArray } = useFormTask()

  return (
    <div className={s.container} {...props} data-testid="editorOn">
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            type="text"
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Task name"
            style={{
              fontWeight: 700,
              border: errors.title && 'solid 2px red',
              maxWidth: '85%',
              height: '42px',
            }}
          />
        )}
      />
      <div className={s.paramsWrapper}>
        <ul className={s.paramsKey}>
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
        <ul className={s.paramValue}>
          <li>
            {status ? (
              <p>{status}</p>
            ) : (
              <Controller
                control={control}
                name="sectionId"
                render={({ field: { onChange, onBlur, value } }) => (
                  <select
                    className={s.select}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    style={{
                      border: errors.priority && 'solid 2px red',
                    }}
                  >
                    {statusArray.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {spliceText(name, 25)}
                      </option>
                    ))}
                  </select>
                )}
              />
            )}
          </li>
          <li>
            <Controller
              control={control}
              name="dueDate"
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  className={s.dueDate}
                  type="date"
                  value={value || ''}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Task name"
                  min={dateForCalendar()}
                  style={{
                    border: errors.dueDate && 'solid 2px red',
                  }}
                />
              )}
            />
          </li>
          <li>
            <Controller
              control={control}
              name="priority"
              render={({ field: { onChange, onBlur, value } }) => (
                <select
                  className={s.select}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  style={{
                    border: errors.priority && 'solid 2px red',
                  }}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              )}
            />
          </li>
        </ul>
      </div>

      <div className={s.descriptionContainer}>
        <h3>Description</h3>

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <textarea
              className={s.textArea + ' scroll-y'}
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              style={{ border: errors.description && 'solid 2px red' }}
            />
          )}
        />
      </div>
    </div>
  )
}

export default FormTask
