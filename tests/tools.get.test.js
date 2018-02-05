/* eslint-env jest */

const { renderSync } = require('node-sass')

describe('Tool get', () => {
  it('should get from map', () => {
    const { css } = renderSync({
      data: `
        @import 'tools/get';
        $map: ( prop: value );
        .output { result: ekzo-get($map, prop); }
      `
    })
    expect(css.toString()).toMatchSnapshot()
  })

  it('should get from nested map', () => {
    const { css } = renderSync({
      data: `
        @import 'tools/get';
        $map: (
          depth1: (
            depth2: depth2Value
          )
        );
        .output { result: ekzo-get($map, depth1, depth2); }
      `
    })
    expect(css.toString()).toMatchSnapshot()
  })

  it('should throw on wrong key', () => {
    expect(() => renderSync({
      data: `
        @import 'tools/get';
        $map: (
          depth1: (
            nope: value
          )
        );
        .output { result: ekzo-get($map, depth1, depth2); }
      `
    })).toThrowErrorMatchingSnapshot()
  })

  it('should throw on non-map value', () => {
    expect(() => renderSync({
      data: `
        @import 'tools/get';
        $map: (
          depth1: nope
        );
        .output { result: ekzo-get($map, depth1, depth2); }
      `
    })).toThrowErrorMatchingSnapshot()
  })
})
