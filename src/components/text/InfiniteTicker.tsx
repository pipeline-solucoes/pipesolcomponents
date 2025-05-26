'use client'

import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'
import { Box, Typography } from '@mui/material'

type Props = {
  items: string[]
  backgroundColor?: string
  textColor?: string
  speed?: number
  repeatCount?: number
  isContinuo?: boolean
}

const InfiniteTicker: React.FC<Props> = ({ 
  items,
  backgroundColor = '#000',
  textColor = '#fff',
  speed = 100,
  repeatCount = 6}) => { 

  const containerRef = useRef<HTMLDivElement>(null)
  const x = useRef(0)

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      x.current -= (speed * delta) / 1000
      if (x.current <= -containerWidth / 2) {
        x.current = 0
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`
    }
  })

  // Renderiza a lista como JSX com separadores apenas entre os itens
  const renderItems = () => (
    <Box sx={{ display: 'flex' }}>
      {items.map((item, idx) => (
        <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component="span" sx={{ mx: 1 }}>
            {item}
          </Typography>
          {idx < items.length - 1 && (
            <Typography component="span" sx={{ mx: 1 }}>
              •
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  )

  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        py: 1,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: backgroundColor,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          color: textColor,
          typography: 'body1',
          fontWeight: 500,
        }}
        ref={containerRef}
      >
        {Array.from({ length: repeatCount }).map((_, i) => (
          <Box key={i} sx={{ display: 'flex', mx: 2 }}>
            {renderItems()}
          </Box>
        ))}
      </Box>
    </Box>
  )
};

export default InfiniteTicker;

