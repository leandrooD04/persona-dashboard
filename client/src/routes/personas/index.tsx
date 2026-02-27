import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personas/')({
  component: PersonasPage,
})

function PersonasPage() {
  return <div>Hello "/personas/"!</div>
}
