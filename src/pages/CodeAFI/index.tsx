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

const CodeAFI: React.FC<Props> = ({ navigation }) => {

  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
       <HeaderNav 
        title="Alfabeto Fonético Internacional"
        subtitle="Códigos para comunicações via rádio"
        navigation={navigation}
      />
      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>Alfabeto Fonético Internacional</Title>
              <Article>A - Alpha</Article>              
              <Article>B - Bravo</Article>              
              <Article>C - Charlie</Article>              
              <Article>D - Delta</Article>              
              <Article>E - Echo</Article>              
              <Article>F - Foxtrot</Article>              
              <Article>G - Golf</Article>              
              <Article>H - Hotel</Article>              
              <Article>I - Indian</Article>              
              <Article>J - Juliet</Article>              
              <Article>K - Kilo</Article>              
              <Article>L - Lima</Article>              
              <Article>M - Mike</Article>              
              <Article>N - November</Article>              
              <Article>O - Oscar</Article>              
              <Article>P - Papa</Article>              
              <Article>Q - Québec</Article>              
              <Article>R - Romeu</Article>              
              <Article>S - Sierra</Article>              
              <Article>T - Tango</Article>              
              <Article>U - Uniform</Article>              
              <Article>V - Victor</Article>              
              <Article>W - Whiskey</Article>              
              <Article>X - X Ray</Article>              
              <Article>Y - Yankee</Article>              
              <Article>Z - Zulu</Article>                            
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

export default CodeAFI;
