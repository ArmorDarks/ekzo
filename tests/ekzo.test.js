/* eslint-env jest */

const { renderSync } = require('node-sass')
const glob = require('glob')

describe('Ekzo', () => {
  it('should compile', () => {
    const { css } = renderSync({
      file: 'tests/fixtures/_ekzo.scss'
    })

    expect(css.toString()).toMatchSnapshot()
  })

  it('modules should compile individually', (done) => {
    glob('**/*.{scss,sass}', { ignore: '**/node_modules/**' }, (error, files) => {
      if (error) throw new Error('Encountered an error in test')

      files.forEach((file) => {
        expect(() => {
          try {
            renderSync({ file })
          } catch (error) {
            error.message = `${file}:\n${error.message}`
            throw new Error(error)
          }
        }).not.toThrow()
      })
    })
  })
})
