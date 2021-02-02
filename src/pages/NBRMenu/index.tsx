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

const NBRMenu: React.FC<Props> = ({ navigation }) => {
 
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav 
        title="Leis e Normas"
        subtitle="Regulamentações da profissão BPC"
        navigation={navigation}
      />
      <Content>        
        <Buttons>
        <ShoppingButton onPress={() => {navigation.navigate('CodeQ')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Lei 11901/2009</ShoppingButtonTitle>
              <ShoppingButtonDescription>
              Qualificação profissional de bombeiro civil – Requisitos e procedimentos.
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeQ')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>NBR 16877</ShoppingButtonTitle>
              <ShoppingButtonDescription>
              Qualificação profissional de bombeiro civil – Requisitos e procedimentos.
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeS')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>NBR 14023</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Registro de Atividade de Bombeiro
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeN')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>NBR 15219</ShoppingButtonTitle>
              <ShoppingButtonDescription>
              Plano de Emergência Contra Incêndio.
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>            
          </ShoppingButton>
          <ShoppingButton onPress={() => {navigation.navigate('CodeAFI')}}>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>NBR 14276</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Brigada de Incêndio
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

export default NBRMenu;
