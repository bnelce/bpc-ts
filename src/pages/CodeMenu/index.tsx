import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import SVGLoader from "../../components/SVGLoader";
import HeaderNav from "../../components/HeaderNav";

import {
  Container,
  Content,
  Buttons,
  ShoppingButton,
  ShoppingButtonInfo,
  ShoppingButtonTitle,
  ShoppingButtonDescription,
  Separator,
  Footer,
  FooterLeftSide,
  FooterTitle,
  FooterDescription,
  FooterButtonContainer,
  FooterButton,
  FooterButtonText,
  FooterRightSide,
} from "./styles";


interface Props {
  navigation: void;
}

const CodeMenu: React.FC<Props> = ({ navigation }) => {
 
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav 
        title="Códigos Operacionais"
        subtitle="Códigos para comunicações via rádio"
        navigation={navigation}
      />
      <Content>        
        <Buttons>
          <ShoppingButton onPress={() => {navigation.navigate('CodeQ')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Código Q</ShoppingButtonTitle>
              <ShoppingButtonDescription>
              O Código Q foi desenvolvido pelo governo britânico como forma de facilitar a troca de informações.
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeS')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Código S</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Código utilizado por militares para facilitar a troca de informções.
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeN')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Código Numérico</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Os códigos militares que usam números oridnais com forma de comunicação .
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeAFI')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Alfabeto Fonético Internacional</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                É uma forma de representação padronizada dos sons do idioma falado.
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
        </Buttons>        
        <Separator />
         <Footer>
          <FooterLeftSide>
            <FooterTitle>Rodapé CodeMenu</FooterTitle>
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

export default CodeMenu;
