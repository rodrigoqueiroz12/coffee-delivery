import { StyledContainer } from './styled'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container(props: ContainerProps) {
  return <StyledContainer {...props} />
}
