import fs from 'fs'
import colors from '@airtable/blocks/dist/cjs/colors.js'
import colorUtils from '@airtable/blocks/dist/cjs/color_utils.js'

const fileHeader = `# Airtable Blocks SDK Colors

A list of all colors available in the Airtable Blocks SDK that is [missing in the official docs site](https://airtable.com/developers/extensions/api/UI/utils/colors)

| Name | Hex | RGB |
| ---- | --- | --- |
`
const table = Object.keys(colors.default)
  .map((color) => {
    const hex = colorUtils.default.getHexForColor(colors.default[color])
    const rgb = colorUtils.default.getRgbForColor(colors.default[color])
    return `| ${color} | \`${hex}\` | \`${rgb.r}, ${rgb.g}, ${rgb.b}\` |`
  })
  .join('\n')

fs.writeFileSync('README.md', fileHeader + table)
