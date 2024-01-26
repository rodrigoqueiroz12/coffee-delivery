import { Provider } from 'react-redux'
import { store } from '@/redux/store'

interface ReduxProvider {
  children: React.ReactNode
}

export default function ReduxProvider({ children }: ReduxProvider) {
  return <Provider store={store}>{children}</Provider>
}
