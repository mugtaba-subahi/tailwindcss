const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');

const purgecss = postcssPurgecss({
  content: ['./public/**/*.html', './src/**/*.vue'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],
});

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    postcssSimpleVars,
    postcssNested,
    autoprefixer,
    ...(process.env.NODE_ENV === 'prod' ? [purgecss] : []),
  ],
};
