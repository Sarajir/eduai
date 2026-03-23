import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="mb-10 border-b border-stone-200/80 pb-8">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-bridge-600">{eyebrow}</p>
      ) : null}
      <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h1>
      {description ? (
        <div className="mt-4 max-w-3xl text-lg leading-relaxed text-stone-600">{description}</div>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  )
}
