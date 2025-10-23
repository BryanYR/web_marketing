import { tv } from 'tailwind-variants'

export const appButtonStyles = tv({
  base: 'inline-flex items-center justify-center rounded-full font-semibold transition-all hover:scale-105 duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    size: {
      sm: 'text-sm px-3 py-2',
      md: 'text-sm px-4 py-2.5',
      lg: 'text-base px-6 py-3',
    },
    variant: {
      primary: 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400',
      secondary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:ring-indigo-400',
      ghost: 'bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
