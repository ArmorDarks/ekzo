/* eslint-env jest */

const { renderSync } = require('node-sass')

describe('Ekzo', () => {
  it('should compile', () => {
    const { css } = renderSync({
      file: 'tests/fixtures/_ekzo.scss'
    })

    expect(css.toString()).toMatchSnapshot()
  })
})
