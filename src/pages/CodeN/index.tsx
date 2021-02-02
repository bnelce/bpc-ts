import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";

import SVGLoader from "../../components/SVGLoader";
import HeaderNav from "../../components/HeaderNav";

import {
  Container,
  Content,
  Buttons,
  ShoppingButtonInfo,
  Title,
  Subtitle,
  Article,
  Separator,
  Footer,
  FooterLeftSide,
  FooterTitle,
  FooterDescription,
  FooterButtonContainer,
  FooterButton,
  FooterButtonText,
  FooterRightSide,
  TextContainer,
} from "./styles";

interface Props {
  navigation: void;
}

const CodeN: React.FC<Props> = ({ navigation }) => {
  

  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
       <HeaderNav 
        title="Código Númerico"
        subtitle="Códigos para comunicações via rádio"
        navigation={navigation}
      />
      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>Código Númerico</Title>              
              <Article>0 - Negativo</Article>
              <Article>1 - Primeiro</Article>              
              <Article>2 - Segundo</Article>              
              <Article>3 - Terceiro</Article>              
              <Article>4 - Quarto</Article>              
              <Article>5 - Quinto</Article>              
              <Article>6 - Sexto</Article>              
              <Article>7 - Sétimo</Article>              
              <Article>8 - Oitavo</Article>              
              <Article>9 - Nono</Article>              
            </ShoppingButtonInfo>
          </TextContainer>
        </Buttons>
        <Separator />
        <Footer>
          <FooterLeftSide>
            <FooterTitle>Rodapé da Legislação</FooterTitle>
            <FooterDescription>
              Ajeitar Texto de acordo com o tema!
            </FooterDescription>
            <FooterButtonContainer onPress={() => {navigation.navigate('Home')}}>
              <FooterButton>
                <FooterButtonText>Menu Principal</FooterButtonText>
              </FooterButton>
            </FooterButtonContainer>
          </FooterLeftSide>
          <FooterRightSide>
            <SVGLoader name="footer_share" width={155} height={152} />
          </FooterRightSide>
        </Footer>
      </Content>
    </Container>
  );
};

export default CodeN;
