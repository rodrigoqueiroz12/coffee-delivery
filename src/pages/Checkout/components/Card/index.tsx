import { StyledCard } from './styled'

interface CardProps {
  children: React.ReactNode
}

export default function Card(props: CardProps) {
  return <StyledCard {...props} />
}
