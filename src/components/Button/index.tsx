import { StyledButton } from './styled'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  $variant?: 'primary'
}

export default function Button({
  $variant = 'primary',
  ...props
}: ButtonProps) {
  return <StyledButton {...props} $variant={$variant} />
}
