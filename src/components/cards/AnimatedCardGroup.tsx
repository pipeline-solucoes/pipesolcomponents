'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, Typography, Box, styled } from '@mui/material'
import { AnimatedCardData } from '@/types/AnimatedCardData'
import { ShadowConfig } from '@/types/ShadowConfig'

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color', 'color',
      'width_card', 'min_height_card', 
      'border_width', 'sombraClara', 'sombraEscura'].includes(prop as string),
})<{
  border_radius: string;
  color: string;
  background_color: string;  
  width_card: string;
  min_height_card: string;  
  border_width: string;
  sombraClara: ShadowConfig;
  sombraEscura: ShadowConfig;
}>(({ border_radius, color, background_color, width_card, min_height_card, 
    border_width, sombraClara, sombraEscura }) => ({

    backgroundColor: background_color,
    color: color,
    borderRadius: border_radius,
    minHeight: min_height_card,    
    transition: 'background-color 0.3s ease',
    width: width_card,    
    boxShadow: `
        ${sombraClara.offsetX} ${sombraClara.offsetY} ${sombraClara.blur} ${sombraClara.color},
        ${sombraEscura.offsetX} ${sombraEscura.offsetY} ${sombraEscura.blur} ${sombraEscura.color}
    `,
    borderTop: `${border_width} solid ${sombraClara.color}`,
    borderLeft: `${border_width} solid ${sombraClara.color}` 
}))

export const DivTitle = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    gap: '16px',
    width: '100%',        
}));
 
interface MapCardProps {
  cards: AnimatedCardData[]
  background_color: string;
  background_color_hover: string;
  color: string;
  color_hover: string;
  width_card: string;
  min_height_card: string;
  max_height_card: string;
  border_radius: string;
  sombraClara?: ShadowConfig; //Configuracao da Sombra Clara
  sombraEscura?: ShadowConfig; //Configuracao da Sombra Escura  
}

const AnimatedCardGroup: React.FC<MapCardProps> = ({ 
  cards, background_color, background_color_hover,
  color, color_hover, width_card, 
  min_height_card, max_height_card, border_radius,
  sombraClara = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},
  sombraEscura = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'}, 
}) => {
  
  const [activeCard, setActiveCard] = useState<number | null>(null)  

  const border_width = (sombraClara.blur == '0px') ? '0px' : '3px';

  return (
    <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
      {cards.map(({ id, title, description, icon: Icon }) => {
        
        const isActive = activeCard === id;

        return (
          <motion.div
            key={id}
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            onClick={() => setActiveCard(activeCard === id ? null : id)}            
            style={{ cursor: 'pointer', width: width_card }}
          >
            <StyledCard 
                background_color={isActive ? background_color_hover : background_color}
                color={isActive ? color_hover : color} 
                width_card='100%'
                min_height_card={ isActive ? max_height_card : min_height_card }
                border_radius={border_radius}
                border_width={border_width}
                sombraClara={sombraClara}
                sombraEscura={sombraEscura}                                
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <DivTitle>                    
                    <Typography variant="h6" component="div" align="center" flex={1}>
                        {title}
                    </Typography>
                    <Box fontSize={32}>
                      <Icon/>
                    </Box>
                </DivTitle>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography variant="body1" align="center" mt={2}>
                        {description}
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </StyledCard>
          </motion.div>
        )
      })}
    </Box>
  )
};

export default AnimatedCardGroup;
