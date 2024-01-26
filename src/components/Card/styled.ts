import styled from 'styled-components'

export const StyledCard = styled.div`
  border-radius: 6px;
  padding: 2rem;
  background: ${(props) => props.theme.colors['base-card']};

  box-shadow:
    1px 2px 2px hsl(0, 4%, 85%, 0.1),
    2px 4px 4px hsl(0, 4%, 85%, 0.1),
    4px 8px 8px hsl(0, 4%, 85%, 0.1),
    8px 16px 16px hsl(0, 4%, 85%, 0.1),
    16px 32px 32px hsl(0, 4%, 85%, 0.1);
`
