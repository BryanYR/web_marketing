import { tv } from 'tailwind-variants'

export const badgeStyles = tv({
  base: 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
  variants: {
    tone: {
      indigo: '',
      slate: '',
      emerald: '',
    },
    soft: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { tone: 'indigo', soft: true, class: 'bg-indigo-50 text-indigo-700' },
    { tone: 'indigo', soft: false, class: 'bg-indigo-600 text-white' },

    { tone: 'slate', soft: true, class: 'bg-slate-100 text-slate-800' },
    { tone: 'slate', soft: false, class: 'bg-slate-900 text-white' },

    { tone: 'emerald', soft: true, class: 'bg-emerald-50 text-emerald-700' },
    { tone: 'emerald', soft: false, class: 'bg-emerald-600 text-white' },
  ],
  defaultVariants: {
    tone: 'indigo',
    soft: true,
  },
})
