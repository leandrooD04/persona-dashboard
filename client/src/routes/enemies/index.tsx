import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/enemies/')({
  component: EnemiesPage,
})

function EnemiesPage() {
  return <div>Hello "/enemies/"!</div>
}
