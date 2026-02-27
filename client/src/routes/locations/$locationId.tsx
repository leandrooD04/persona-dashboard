import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/$locationId')({
  component: LocationDetailPage,
})

function LocationDetailPage() {
  return <div>Hello "/locations/$locationId"!</div>
}
