export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ height: '1px', background: 'rgba(200,160,78,0.12)', width: '100%' }}
      aria-hidden="true"
    />
  )
}
