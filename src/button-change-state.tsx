'use client'

import React, { useState,forwardRef } from 'react'

interface ButtonChangeStateProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  contentInitial: string | React.ReactElement
  contentStatus: string | React.ReactElement
  status?: boolean | React.ReactElement
  onPressButtonInitial?: () => void
  onPressButtonStatus?: () => void
  bgInitial?: string
  bgStatus?: string
  colorText?: string
  stylesButton?: React.CSSProperties
  stylesButtonStatus?: React.CSSProperties
  colorTextStatus?: string
}

const COLORS = {
  dark: {
    100: '#2222',
    default: '#222',
  },
  white: '#fff',
  transparent: 'transparent',
}

export const ButtonChangeState = forwardRef<null | HTMLDivElement,ButtonChangeStateProps>(({
  contentInitial,
  contentStatus,
  status = false,
  onPressButtonInitial,
  onPressButtonStatus,
  bgInitial,
  bgStatus,
  stylesButtonStatus,
  stylesButton,
  colorText,
  colorTextStatus,
},ref) => {
  const [statusButton, setStatus] = useState(status)

  const stylesFont = {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: 'system-ui',
  }

  const stylesWithButtoStatus = {
    backgroundColor: bgStatus ?? COLORS.transparent,
    outline: `2px solid ${COLORS.dark[100]}`,
    color: colorTextStatus ?? COLORS.dark.default,
    ...stylesFont,
    ...stylesButtonStatus,
  }

  const stylesWithButtonInitial = {
    backgroundColor: bgInitial ?? COLORS.dark.default,
    color: colorText ?? COLORS.white,
    ...stylesFont,
    ...stylesButton,
  } as React.CSSProperties

  const handlePressInitial = () => {
    onPressButtonInitial?.()
    setStatus(false)
  }

  const handlePressStatus = () => {
    onPressButtonStatus?.()
    setStatus(true)
  }

  return (
    <div ref={ref} className='container-button'>
      {statusButton && (
        <button
          className='button'
          style={stylesWithButtoStatus}
          onClick={handlePressStatus}
        >
          <span className='animation-button-slide-up'>{contentStatus}</span>
        </button>
      )}
      {!statusButton && (
        <button
          className='button'
          style={stylesWithButtonInitial}
          onClick={handlePressInitial}
        >
          <span>{contentInitial}</span>
        </button>
      )}
    </div>
  )
})
