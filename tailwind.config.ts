
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Theme-specific colors
				eternal: {
					black: '#0A0A0A',
					gold: '#D4AF37',
					burgundy: '#800020',
					accent: '#C0C0C0'
				},
				vintage: {
					cream: '#FFF8E7',
					blush: '#FFDEE2',
					gold: '#DAA520',
					sepia: '#704214',
					paper: '#F8F0E3'
				},
				starry: {
					midnight: '#0C1445',
					blue: '#1A237E',
					purple: '#673AB7',
					silver: '#E6E6FA',
					star: '#FFFFC2'
				},
				golden: {
					emerald: '#046307',
					rosegold: '#B76E79',
					champagne: '#F7E7CE',
					gold: '#FFD700',
					marble: '#F5F5F5'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Inter', 'sans-serif'],
				handwritten: ['Dancing Script', 'cursive'],
				modern: ['Montserrat', 'sans-serif'],
				elegant: ['Cormorant Garamond', 'serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'bubble-rise': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-out': 'fade-out 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'slide-up': 'slide-up 0.7s ease-out forwards',
				'slide-down': 'slide-down 0.7s ease-out forwards',
				'slide-left': 'slide-left 0.7s ease-out forwards',
				'slide-right': 'slide-right 0.7s ease-out forwards',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s infinite linear',
				'bubble-rise': 'bubble-rise 12s ease-in-out infinite',
			},
			backgroundImage: {
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
				'gold-foil': 'linear-gradient(45deg, #D4AF37 0%, #FFF2CC 50%, #D4AF37 100%)',
				'marble': 'linear-gradient(45deg, #F5F5F5 0%, #E0E0E0 50%, #F5F5F5 100%)',
				'vintage-paper': 'linear-gradient(to right, #f8f4e3 0%, #f0e6d2 100%)',
				'night-sky': 'linear-gradient(to bottom, #0C1445 0%, #1A237E 50%, #4A148C 100%)',
				'emerald-gradient': 'linear-gradient(45deg, #046307 0%, #0A8F0D 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
