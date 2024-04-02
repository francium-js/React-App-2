import { giveArrayChangedParams } from './index'
import { Task } from 'src/entities/task.entity'

describe('giveArrayChangedParams', () => {
  it('should return array of changed parameters', () => {
    const task: Task = {
      id: '1',
      title: 'Old Title',
      status: 'Old Status',
      dueDate: Date.now(),
      priority: 'Low',
      description: 'Old Description',
      section: null,
      history: [],
    }

    const newData: Partial<Task> = {
      title: 'New Title',
      status: 'New Status',
      dueDate: Date.now() + 86400000,
      priority: 'Medium',
      description: 'New Description',
    }

    const expectedArray = [
      'Changed params:',
      'Title: Old Title > New Title',
      'Status: Old Status > New Status',

      expect.stringMatching(
        /^DueDate: \w{3}, \d{1,2} \w{3} > \w{3}, \d{1,2} \w{3}$/,
      ),
      'Priority: Low > Medium',
      'Description: Old Description > New Description',
    ]

    const result = giveArrayChangedParams(task, newData)

    expect(result).toEqual(expectedArray)
  })
})
