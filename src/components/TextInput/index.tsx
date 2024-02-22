import { ComponentProps, forwardRef } from 'react'

import { StyledInput, StyledInputContainer } from './styled'

interface TextInputProps extends ComponentProps<'input'> {
  $optional?: boolean
}

type Ref = HTMLInputElement

const TextInput = forwardRef<Ref, TextInputProps>(
  ({ $optional = false, ...props }, ref) => {
    return (
      <StyledInputContainer $optional={$optional}>
        <StyledInput {...props} ref={ref} />
      </StyledInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput
