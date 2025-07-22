import { HomeScreen, IPadFrame, Screen } from '@/components/iPad'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <IPadFrame>
      <Screen>
        <HomeScreen />
      </Screen>
    </IPadFrame>
  )
}
