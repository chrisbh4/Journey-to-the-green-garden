defmodule FlyWeb.DateHelpers do
  @moduledoc false

  def format_date(date) do
    case {:ok, date} do
      {:ok, datetime} ->
        Timex.format!(datetime, "{Mfull} {D}, {YYYY}")
      end
  end

  def format_date_ranges(start_date_time, end_date_time) do
    same_year? = start_date_time.year == end_date_time.year

    end_format = "{Mshort} {D}, {YYYY}"
    start_format = if same_year?, do: "{Mshort} {D}", else: end_format

    with {:ok, start_formatted} <- Timex.format(start_date_time, start_format),
         {:ok, end_formatted} <- Timex.format(end_date_time, end_format) do
      "#{start_formatted} - #{end_formatted}"
    else
      _ ->
        "Invalid date range"
    end
  end

  def format_timestamp_range(start_stamp, end_stamp) do
    with {:ok, start_date} <- DateTime.from_unix(start_stamp, :second),
         {:ok, end_date} <- DateTime.from_unix(end_stamp, :second) do
      format_date_ranges(start_date, end_date)
    else
      _ ->
        "Invalid date range"
    end
  end

  def format_timestamp(stamp) do
    with {:ok, date} <- DateTime.from_unix(stamp, :second),
         {:ok, formatted} <- Timex.format(date, "{Mshort} {D}") do
      formatted
    else
      _ ->
        "Invalid date"
    end
  end
end




----------------------------------------------------------------------------------------------------------------------------------

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: [ './tailwindcss.whitelist.txt', '../lib/*_web/**/*.*ex', '../lib/*_admin/**/*.*ex' ],
	theme: {
		extend: {
			spacing:{
				'1px': '1px',
				'2px': '2px',
				'3px': '3px',
				'4px': '4px',
				'5px': '5px',
				'8p' : '8px',
				'9p' : '9px',
				'7p' : '7px',
			},
			backgroundSize: {
				'full-auto': '100% auto',
				'auto-full': 'auto 100%',
				150: '150%'
			},
			boxShadow: {
				purple: '0 2px 8px hsla(253, 79%, 37%, .35)',
				'sm-purple': '0 1px 4px hsla(253, 79%, 37%, .15)',
				'white-glow': '0 25px 50px 50px white',
				px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
				link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(143, 88, 240, 0.25)'
			},
			colors: {
				gray: {
					50: '#F8F9FC',
					100: '#F1F2F9',
					200: '#E1E4EF',
					300: '#CCD0E0',
					400: '#9698B6',
					500: '#676B89',
					600: '#4C4E67',
					700: '#373953',
					800: '#202237',
					900: '#121226'
				},
				navy: '#24185B',
				purple: {
					50: '#FAF5FF',
					100: '#F6E7FF',
					200: '#EDD4FE',
					300: '#DFB2FC',
					400: '#CA7FF8',
					500: '#B54FF3',
					600: '#A02BE4',
					700: '#8919C9',
					800: '#731CA5',
					900: '#5D1985'
				}
			},
			container: {
				screens: {
					xs: '480px',
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1400px'
				}
			},
			filter: {
				none: 'none',
				'shadow-plum': 'drop-shadow(0 2px 8px hsla(333, 65%, 10%, .35))',
				'shadow-purple': 'drop-shadow(0 2px 8px hsla(253, 79%, 37%, .35))'
			},
			gridTemplateColumns: {
				'auto-span': 'auto 1fr',
				'span-auto': '1fr auto',
				'auto-span-auto': 'auto 1fr auto',
				'span-auto-span': '1fr auto 1fr',
				'fill-24': `repeat(auto-fill, minmax(${defaultTheme.spacing[24]}, 1fr))`,
				'fill-32': `repeat(auto-fill, minmax(${defaultTheme.spacing[32]}, 1fr))`,
				'fill-40': `repeat(auto-fill, minmax(${defaultTheme.spacing[40]}, 1fr))`,
				'fill-48': `repeat(auto-fill, minmax(${defaultTheme.spacing[48]}, 1fr))`,
				'fill-56': `repeat(auto-fill, minmax(${defaultTheme.spacing[56]}, 1fr))`,
				'fill-64': `repeat(auto-fill, minmax(${defaultTheme.spacing[64]}, 1fr))`,
				'fill-80': `repeat(auto-fill, minmax(${defaultTheme.spacing[80]}, 1fr))`,
				'fill-96': `repeat(auto-fill, minmax(${defaultTheme.spacing[96]}, 1fr))`,
				'fit-24': `repeat(auto-fit, minmax(${defaultTheme.spacing[24]}, 1fr))`,
				'fit-32': `repeat(auto-fit, minmax(${defaultTheme.spacing[32]}, 1fr))`,
				'fit-40': `repeat(auto-fit, minmax(${defaultTheme.spacing[40]}, 1fr))`,
				'fit-48': `repeat(auto-fit, minmax(${defaultTheme.spacing[48]}, 1fr))`,
				'fit-56': `repeat(auto-fit, minmax(${defaultTheme.spacing[56]}, 1fr))`,
				'fit-64': `repeat(auto-fit, minmax(${defaultTheme.spacing[64]}, 1fr))`,
				'fit-80': `repeat(auto-fit, minmax(${defaultTheme.spacing[80]}, 1fr))`,
				'fit-96': `repeat(auto-fit, minmax(${defaultTheme.spacing[96]}, 1fr))`
			},
			gridTemplateRows: {
				'auto-span': 'auto 1fr',
				'span-auto': '1fr auto',
				'auto-span-auto': 'auto 1fr auto',
				'span-auto-span': '1fr auto 1fr'
			},
			fontFamily: {
				sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
				mono: [ 'Native', ...defaultTheme.fontFamily.mono ],
				serif: [ 'Mackinac', ...defaultTheme.fontFamily.serif ]
			},
			fontSize: {
				'2.5xl': [ '1.625rem', { lineHeight: '1.25' } ],
				'4.5xl': [ '2.5rem', { lineHeight: '1.25' } ],
				'5.5xl': [ '3.35rem', { lineHeight: '1.25' } ]
			},
			listStyleType: {
				alpha: 'lower-alpha',
				stripes: "stripe"

			},
			minHeight: {
				20: defaultTheme.spacing[20],
				24: defaultTheme.spacing[20],
				32: defaultTheme.spacing[32]
			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			},
			textShadow: {
				plum: '0 2px 8px hsla(333, 65%, 10%, .35)',
				purple: '0 2px 8px hsla(253, 79%, 37%, .35)'
			},
			textUnderlineOffset: {
				sm: '0.05em'
			},
			translate: {
				label: '-1.4rem'
			},
			zIndex: {
				'-1': '-1'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('tailwindcss-textshadow'),
		plugin(function({ addComponents, theme }) {
			const buttons = {
				'.button-xs, .button-sm, .button, .button-lg, .button-xl, .button-2xl': {
					display: 'inline-flex',
					'align-items': 'center',
					'justify-content': 'center',
					'font-weight': '600',
					'letter-spacing': theme('letterSpacing.normal'),
					'border-radius': theme('borderRadius.lg'),
					'white-space': 'nowrap',
					transition: '.2s all'
				},
				'.button-xs': {
					'font-size': theme('fontSize.sm'),
					'padding-left': theme('spacing.1'),
					'padding-right': theme('spacing.1'),
					height: '30px'
				},
				'.button-sm': {
					'font-size': theme('fontSize.sm'),
					'padding-left': theme('spacing.3'),
					'padding-right': theme('spacing.3'),
					height: '34px'
				},
				'.button': {
					'font-size': theme('fontSize.sm'),
					'padding-left': theme('spacing.3'),
					'padding-right': theme('spacing.3'),
					height: '38px'
				},
				'.button-lg': {
					'font-size': theme('fontSize.sm'),
					'padding-left': theme('spacing.4'),
					'padding-right': theme('spacing.4'),
					height: '42px'
				},
				'.button-xl': {
					'font-size': theme('fontSize.base'),
					'padding-left': theme('spacing.5'),
					'padding-right': theme('spacing.5'),
					height: '48px'
				},
				'.button-2xl': {
					'font-size': theme('fontSize.lg'),
					'padding-left': theme('spacing.6'),
					'padding-right': theme('spacing.6'),
					height: '60px'
				}
			};
			const cards = {
				'.card': {
					'border-radius': theme('borderRadius.default'),
					'background-color': '#FFF',
					'box-shadow': theme('boxShadow.default')
				}
			};

			const wordSpacing = {
				'.word-spacing-wide': {
					'word-spacing': '0.025em'
				}
			};

			addComponents([ buttons, cards, wordSpacing ]);
		})
	]
};



----------------------------------------------------------------------------------------------------------------------------------



