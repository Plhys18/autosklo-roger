import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  theme: {
    colors: {
      // Blue Automotive theme colors with high contrast
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      },
      accent: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12'
      },
      automotive: {
        glass: '#e6f3ff',
        steel: '#64748b',
        chrome: '#e2e8f0',
        tire: '#1e293b',
        blue: '#0ea5e9',
        darkBlue: '#0284c7'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Orbitron', 'sans-serif'],
      display: ['Exo 2', 'sans-serif'],
      modern: ['Rajdhani', 'sans-serif'],
      tech: ['Titillium Web', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    boxShadow: {
      'automotive': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      'deep': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  },
  shortcuts: {
    // Custom automotive shortcuts with improved contrast
    'btn-primary': 'bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg',
    'btn-secondary': 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 border border-secondary-300',
    'btn-accent': 'bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg',
    'card-automotive': 'bg-white rounded-xl shadow-automotive border border-secondary-300 p-6',
    'glass-effect': 'backdrop-blur-md bg-white/10 border border-white/30 rounded-xl',
    'heading-primary': 'font-heading font-bold text-secondary-900 tracking-wide',
    'text-automotive': 'text-secondary-700 leading-relaxed font-medium',
    'text-high-contrast': 'text-secondary-900 font-semibold',
    'link-contrast': 'text-primary-700 hover:text-primary-800 font-medium'
  },
  rules: [
    // Custom automotive-specific rules with blue theme
    ['bg-gradient-automotive', { background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)' }],
    ['bg-gradient-glass', { background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }],
    ['text-gradient-automotive', {
      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      'background-clip': 'text',
      '-webkit-background-clip': 'text',
      'color': 'transparent'
    }],
    ['bg-gradient-hero', { background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)' }]
  ]
})