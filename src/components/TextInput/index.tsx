import { StyledInput, StyledInputContainer } from './styled'

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  $optional?: boolean
}

export default function TextInput({
  $optional = false,
  ...props
}: TextInputProps) {
  return (
    <StyledInputContainer $optional={$optional}>
      <StyledInput {...props} />
    </StyledInputContainer>
  )
}
