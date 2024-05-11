
function ErrorFallback({ error, resetErrorBoundary }: {error: Error,resetErrorBoundary: ()=>void}) {
  return (
    <div>ErrorFallback</div>
  )
}

export default ErrorFallback