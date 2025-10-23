import { tv } from 'tailwind-variants'

export const featureCardWrapper = tv({
  base: 'rounded-2xl p-6 shadow-sm transform transition-all duration-300 ease-out will-change-transform',
  variants: {
    tone: {
      dark: 'bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg hover:-translate-y-1',
      light: 'bg-white/90 border border-slate-200 hover:bg-white/95 hover:backdrop-blur-sm hover:shadow-lg hover:-translate-y-1',
    },
  },
  defaultVariants: {
    tone: 'light',
  },
})

export const featureCardIconWrap = tv({
  base: 'mb-4 flex h-12 w-12 items-center justify-center rounded-xl',
  variants: {
    tone: {
      dark: 'bg-white/10 text-white',
      light: 'bg-primary-50 text-primary-700',
    },
  },
  defaultVariants: {
    tone: 'light',
  },
})

export const featureCardTitle = tv({
  base: 'text-lg font-semibold',
  variants: {
    tone: {
      dark: 'text-white',
      light: 'text-slate-900',
    },
  },
  defaultVariants: {
    tone: 'light',
  },
})

export const featureCardDesc = tv({
  base: 'mt-2 text-sm',
  variants: {
    tone: {
      dark: 'text-white/70',
      light: 'text-slate-600',
    },
  },
  defaultVariants: {
    tone: 'light',
  },
})
