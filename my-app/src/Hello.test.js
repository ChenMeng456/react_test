import * as React from 'react'
import { render } from '@testing-library/react'
import { NameEdit } from './Hello'

describe('SayHello Component secs', () => {
  it('should display a label and input elements with empty userName value', () => {
    const { getByTestId } = render(<NameEdit />)
    const labelElement = getByTestId('userName-label')
    const inputElement = getByTestId('userName-input')
    expect(labelElement.textContent).toEqual('')
    expect(inputElement.value).toEqual('')
  })
})