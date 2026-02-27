import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items')({
  component: ItemsPage,
})

function ItemsPage() {
  return <div>Hello "/items"!</div>
}
