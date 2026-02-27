import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/equipments')({
  component: EquipmentsPage,
})

function EquipmentsPage() {
  return <div>Hello "/equipments"!</div>
}
