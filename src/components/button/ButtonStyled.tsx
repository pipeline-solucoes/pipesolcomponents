import { styled } from '@mui/material/styles';

export const ButtonHoverBorderBottomStyled = styled('button', {
  shouldForwardProp: (prop) =>
    ![
      'background_color',
      'color',
      'color_hover',
      'type_padding',
      'border_radius',
      'border_color',
      'width',
    ].includes(prop as string),
})<{
  background_color?: string;
  color: string;
  color_hover?: string;
  type_padding: 'none' | 'default';
  border_radius?: string;
  border_color?: string;
  width: string;
}>(({ background_color, color, color_hover, type_padding, border_radius, border_color, width }) => ({
  width: width,
  cursor: 'pointer',
  textDecoration: 'none',
  textTransform: 'none',
  borderBottom: '2px solid transparent',
  margin: '0px',
  boxShadow: 'none',
  backgroundColor: background_color || 'transparent',
  color: color,
  borderRadius: border_radius || '0px',
  border: border_color ? `1px solid ${border_color}` : 'none',
  padding: type_padding === 'default' ? '8px 24px' : '0px',

  '&:hover': {
    borderBottom: `2px solid ${color_hover || color}`,
    color: color_hover || color,
  },
}));


export const ButtonHoverColorStyled = styled('button', {
  shouldForwardProp: (prop) =>
    ![
      'background_color',
      'color',
      'color_hover',
      'type_padding',
      'border_radius',
      'border_color',
      'width',
    ].includes(prop as string),
})<{
  background_color?: string;
  color: string;
  color_hover?: string;
  type_padding: 'none' | 'default';
  border_radius?: string;
  border_color?: string;
  width: string;
}>(({ background_color, color, color_hover, type_padding, border_radius, border_color, width }) => ({
  width: width,
  cursor: 'pointer',
  textDecoration: 'none',
  textTransform: 'none',  
  margin: '0px',
  boxShadow: 'none',
  backgroundColor: background_color || 'transparent',
  color: color,
  borderRadius: border_radius || '0px',
  border: border_color ? `1px solid ${border_color}` : 'none',
  padding: type_padding === 'default' ? '8px 24px' : '0px',

  '&:hover': {
    color: color_hover || color,
  },
}));