import { Minus, Plus } from '@phosphor-icons/react'
import { StyledCounter } from './styled'

export default function ProductCounter() {
  return (
    <StyledCounter>
      <button>
        <Minus weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus weight="bold" />
      </button>
    </StyledCounter>
  )
}
