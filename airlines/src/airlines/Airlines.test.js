import { shallow } from 'enzyme'
import Flights from './Flights'

describe('<Test />', () => {
  it('renders <Flight/> component', () => {
    const wrapper = shallow(<Test />)
    expect(wrapper.find(Flights)).to.have.lengthOf(1)
  })
})