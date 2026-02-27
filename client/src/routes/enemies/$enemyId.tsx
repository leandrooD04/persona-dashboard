import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/enemies/$enemyId')({
  component: EnemyDetailPage,
})

function EnemyDetailPage() {
  return <div>Hello "/enemies/$enemyId"!</div>
}
