import { tv } from 'tailwind-variants'

export const sectionHeadingEyebrow = tv({
  base: 'mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
  variants: {
    variant: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-white text-primary-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const sectionHeadingContainer = tv({
  base: 'mx-auto max-w-3xl text-center',
})

export const sectionHeadingTitle = tv({
  base: 'text-3xl font-bold tracking-tight sm:text-4xl',
})

export const sectionHeadingSub = tv({
  base: 'mt-4',
})
