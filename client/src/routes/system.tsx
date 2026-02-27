import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/system')({
  component: SystemPage,
})

function SystemPage() {
  return <div>Hello "/system"!</div>
}
