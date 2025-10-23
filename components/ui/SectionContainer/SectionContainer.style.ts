import { tv } from 'tailwind-variants'

export const sectionContainerStyles = tv({
  base: '',
  variants: {
    padding: {
      none: 'py-0',
      sm: 'py-10 sm:py-12',
      md: 'py-16 sm:py-20',
      lg: 'py-24 sm:py-28',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
})
