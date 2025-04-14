import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

interface StyledTextFieldProps {
  background_color: string;
  text_color: string;
  text_color_error: string;
  border_radius: string;
}

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) =>
    !['background_color', 'text_color', 'text_color_error', 'border_radius'].includes(prop as string),
})<StyledTextFieldProps>(({ theme, background_color, text_color, text_color_error, border_radius, error }) => ({

  '& .MuiInputLabel-root': {
    color: error ? text_color_error : text_color, // Label em vermelho em caso de erro
    '& .MuiInputLabel-asterisk': {
      color: error ? text_color_error : text_color, // Asterisco em vermelho no caso de erro
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: error ? text_color_error : text_color, // Placeholder também em vermelho, opcional
  },
  '& .MuiInputBase-root': {
    backgroundColor: background_color,
    borderRadius: border_radius,
    color: text_color,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? text_color_error : 'transparent', // Borda em vermelho em caso de erro
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? text_color_error : 'default', // Também mantém o hover em vermelho
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? text_color_error : 'default', // Foco em vermelho no caso de erro
  },

  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body1?.fontSize,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  margin: theme.typography.body1?.margin,
}));

interface StyledButtonProps {
  width: string;
  height: string;
  background_color: string;
  text_color: string;
  border_radius: string;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    !['width', 'height', 'background_color', 'text_color', 'border_radius'].includes(prop as string),
})<StyledButtonProps>(({ theme, width, height, background_color, text_color, border_radius }) => ({
  
  color: text_color,
  backgroundColor: background_color,
  borderRadius: border_radius,
  textTransform: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 24px',
  boxShadow: 'none',
  width: width,
  height: height,
  
  // Tipografia
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  fontSize: theme.typography.body1?.fontSize,
  margin: theme.typography.body1?.margin,

  // Hover state (opcional)
  '&:hover': {
    backgroundColor: background_color,
    opacity: 0.9,
  },
}));



interface FixedSizeTextFieldProps {
  background_color: string;
  text_color: string;
  text_color_error: string;
  border_radius: string;
}

export const FixedSizeTextField = styled(TextField, {
  shouldForwardProp: (prop) =>
    !['background_color', 'text_color', 'text_color_error', 'border_radius'].includes(prop as string),
})<FixedSizeTextFieldProps>(({ theme, background_color, text_color, text_color_error, border_radius, error }) => ({

'& .MuiInputLabel-root': {
    color: error ? text_color_error : text_color, // Label em vermelho em caso de erro
    '& .MuiInputLabel-asterisk': {
      color: error ? text_color_error : text_color, // Asterisco em vermelho no caso de erro
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: error ? text_color_error : text_color, // Placeholder também em vermelho, opcional
  },
  '& .MuiInputBase-root': {
    transition: 'none !important',
    alignItems: 'flex-start',
    width: '100%',
    overflowY: 'auto',
    height: '150px',
    backgroundColor: background_color,
    borderRadius: border_radius,
    color: text_color,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? text_color_error : 'transparent', // Borda em vermelho em caso de erro
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? text_color_error : 'default', // Também mantém o hover em vermelho
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? text_color_error : 'default', // Foco em vermelho no caso de erro
  },

  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body1?.fontSize,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  margin: theme.typography.body1?.margin,
}));
