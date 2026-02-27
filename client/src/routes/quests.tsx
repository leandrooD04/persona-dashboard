import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quests')({
  component: QuestsPage,
})

function QuestsPage() {
  return <div>Hello "/quests"!</div>
}
