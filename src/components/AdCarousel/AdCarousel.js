import React from 'react';
import './adcarousel.scss';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 12;
const noOfCards = 4;
const autoPlayDelay = 2000;
const chevronWidth = 5;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  background-color : #E9EBEE;
`;

const SlideItem = styled.div`
  height: 140px;
  background: #337ab7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>
    Advertise Here
  </SlideItem>
));

class AdCarousel extends React.Component {

    state = {
    activeItemIndex: 0,
    };

    componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
    }

    componentWillUnmount() {
    clearInterval(this.interval);
    }

    tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
    }));

    onChange = value => this.setState({ activeItemIndex: value });

    render(){
        return(
            <Wrapper>
                <ItemsCarousel
                gutter={12}
                numberOfCards={noOfCards}
                activeItemIndex={this.state.activeItemIndex}
                requestToChangeActive={this.onChange}
                chevronWidth={chevronWidth}
                outsideChevron
                children={carouselItems}
                />
            </Wrapper>
        )
    }
}

export default AdCarousel;