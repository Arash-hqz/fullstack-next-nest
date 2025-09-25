type Props = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageContainer({ title, subtitle, children }: Props) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        
        {/* Title Section */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-brand mb-2">{title}</h1>
          {subtitle && (
            <p className="text-neutral-600">{subtitle}</p>
          )}
        </header>

        {/* Page Content */}
        <div className="min-h-[200px]">
          {children ? children : (
                <p className="text-neutral-500 text-center">
                در حال توسعه... 🚧
                </p>
            )}
        </div>
      </div>
    </section>
  )
}
