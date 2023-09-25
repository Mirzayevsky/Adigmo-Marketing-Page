import React from "react";
import {Container, Wrapper, Logo, LinkWrapper, Link, Button} from "./styles";
const Navbar  = () => {
    return(
        <Wrapper>
            <Container>
                <Logo>Logo</Logo>
                <LinkWrapper>
                    <Link className={"from-left"}> Главная </Link>
                    <Link className={"from-left"}> О нас </Link>
                    <Link className={"from-left"}> Услуги </Link>
                    <Link className={"from-left"}>  Контакты</Link>
                </LinkWrapper>
                <Button>Связаться</Button>
            </Container>
        </Wrapper>
    )
}
export default Navbar