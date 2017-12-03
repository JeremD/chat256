import React from 'react'
import { shallow } from 'enzyme'
import CustomHashPage from '../index' // eslint-disable-line

let wrapper = null

describe('The page component', () => {
  const props = {}

  beforeEach(() => {
    wrapper = shallow(<CustomHashPage {...props} />)
  })

  it('should contain the right fields', () => {
    expect(wrapper.find('input').length).toEqual(2)

    expect(wrapper.find('input').nodes[0].props.name).toEqual('textToHash')
    expect(wrapper.find('input').nodes[0].props.type).toEqual('text')

    expect(wrapper.find('input').nodes[1].props.name).toEqual('numberOfIteration')
    expect(wrapper.find('input').nodes[1].props.type).toEqual('number')
    expect(wrapper.find('input').nodes[1].props.min).toEqual('1')

    expect(wrapper.find('select').node.props.name).toEqual('hashMethod')
  })

  it('handleFieldChange should set field value in state', () => {
    expect(wrapper.instance().state).toEqual({
      textToHash: '',
      hashMethod: 'MD5',
      numberOfIteration: 1,
      customHash: ''
    })
    wrapper.instance().handleFieldChange({ target: { name: 'textToHash', value: 'fakeTest' } })
    expect(wrapper.instance().state).toEqual({
      textToHash: 'fakeTest',
      hashMethod: 'MD5',
      numberOfIteration: 1,
      customHash: ''
    })
  })
})
