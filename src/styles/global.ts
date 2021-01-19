import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`${({ theme: { colors, fonts } }) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.background};
    color: ${colors.text};
    font: ${fonts.base.weight} ${fonts.base.size} ${fonts.base.family}
  }
`}
`
