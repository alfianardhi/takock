import React from 'react'
import { render } from '@testing-library/react'
import Button, { Props } from './index'

test('not allowed click button if is disabled', () => {
  const { container } = render('')

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})
