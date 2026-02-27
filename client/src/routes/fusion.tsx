import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fusion')({
  component: FusionPage,
})

function FusionPage() {
  return <div>Hello "/fusion"!</div>
}
