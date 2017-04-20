import React from 'react'
import ReactDOM from 'react-dom'
import ProductData from '../ProductData'
import {shallow} from 'enzyme'
// import {renderer} from 'react-test-renderer'

describe('ProductData', () => {

    it('', () => {
        const callback = jest.fn()

        const wrapper = shallow(
            <ProductData
                price={121}
                product={{category : 'electronics', stocked: true, name: 'apple', price: 121}}
                onBuyInput={callback}
                isBuying={{}}
            />
        )
        const inputObject = wrapper.find('input')
        inputObject.simulate('change', {target: {checked: true}})

        expect(callback.mock.calls).toEqual([['apple', true, 121]])
    })


})