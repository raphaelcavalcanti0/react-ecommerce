import * as S from './styles'
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from '../../data'
import ConferirBtn from '../Buttons/ConferirBtn';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left" && sliderItems.length > 0) {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
        } else if (direction === "right" && sliderItems.length > 0) {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
        }
    }

    return (
        <S.Container>
            <S.Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </S.Arrow>
            <S.Wrapper slidePosition={slideIndex}>
                {sliderItems.map((item) => (
                    <S.Slide key={item.id}>
                        <S.ImgContainer>
                            <S.Image src={item.img} />
                        </S.ImgContainer>
                        <S.InfoContainer>
                            <S.Title>{item.title}</S.Title>
                            <S.Description>{item.desc}</S.Description>
                            <ConferirBtn />
                        </S.InfoContainer>
                    </S.Slide>
                ))}
            </S.Wrapper>
            <S.Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </S.Arrow>
        </S.Container>
    );
};

export default Slider;
