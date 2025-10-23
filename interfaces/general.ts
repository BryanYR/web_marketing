export type Service = {
  key: 'identidad' | 'social' | 'audiovisual' | 'eventos'
  title: string
  subtitle?: string
  items: Array<{ title: string; description?: string }>
  image?: string
  icon: Component
}

export type PortfolioItem = {
  title: string
  description: string
  image: string
}