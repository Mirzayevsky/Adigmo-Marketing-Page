import React from "react";
import {
    BottomWrapper,
    Container, ContentLeft, ContentRight,
    DolorIcon, GoogleAds,
    GoogleIcon, NoteAndIconWrapper, NoteIcon,
    PictureWrapper, RequestButton, Text,
    TextWrapper,
    Title,
    TitleWrapper,
    Wrapper, YandexIcon
} from "./styles";


const Header = () => {
    return(
        <Wrapper>
            {/*<img src={bgImg}/>*/}
            <Container>
                <TextWrapper>
                    <TitleWrapper>
                        <Title>
                            Сделаем<span className={"color"}> Рекламу </span>
                            основным источником
                            дохода
                            <DolorIcon></DolorIcon>
                        </Title>
                        <GoogleIcon></GoogleIcon>
                    </TitleWrapper>

                    <BottomWrapper>
                        <ContentLeft>
                            <NoteAndIconWrapper>
                                <NoteIcon>

                                </NoteIcon>
                                <Text>Без пустых обещаний и завышенных цифр с нами</Text>
                            </NoteAndIconWrapper>
                            <RequestButton>Оставить заявку</RequestButton>
                        </ContentLeft>

                        <ContentRight>
                            <YandexIcon></YandexIcon>
                        </ContentRight>

                    </BottomWrapper>

                </TextWrapper>
                <PictureWrapper>
                    {/*<img src={googleAds} alt={"img"}/>*/}
                </PictureWrapper>
            </Container>
        </Wrapper>
    )
}
export default Header