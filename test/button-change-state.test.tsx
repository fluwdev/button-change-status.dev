import { beforeEach, describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonChangeState } from '../src'

describe('ButtonChangeState', () => {
  beforeEach(() => {
    render(
      <ButtonChangeState
        status={false}
        contentInitial={'Subscribe'}
        contentStatus={'Subscrition'}
      />
    )
  })

  test('render to initial text at button', () => {
    expect(screen.getByText('Subscribe')).toBeDefined()
  })

  test('not content button status view', () => {
    expect(screen.queryByText('Subscrition')).toBeNull()
  })
  test('click button change status', () => {
    const button = screen.getByText('Subscribe')
    fireEvent.click(button)
    expect(screen.queryByText('Subscrition')).toBeDefined()
  })
})
