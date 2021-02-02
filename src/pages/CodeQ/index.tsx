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

const CodeQ: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
       <HeaderNav 
        title="Código Q"
        subtitle="Código britânico para comunicações via rádio"
        navigation={navigation}
      />
      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>Código Q.</Title>
              <Subtitle>Código britânico para comunicações via rádio.</Subtitle>
              <Article>
              QAP:	Está na escuta?	Permaneça na escuta ou estou na escuta.
              </Article>
              <Article>
              QAM: Qual é a condição meteorológica?	Aqui a condição meteorológia é ….
              </Article>
              <Article>QRA:	Qual o nome operador? -	O meu nome é …</Article>
              <Article>
              QRB:	A qual distância aproximada você está da minha estação?	A distância aproximada entre nossas estações é… milhas náuticas (ou quilômetros).
              </Article>
              <Article>QRC:	Que organização particular (ou administração estadual) liquida as contas de sua estação?	A liquidação das contas da minha estação está sob o encargo da organização particular… (ou da administração estadual…)</Article>
              <Article>QRD:	Aonde vai e de onde vem?	Vou a… e venho de…</Article>
              <Article>QRE:	A que horas pensa chegar a… (ou estar sobre…) (lugar)	Penso chegar a…(lugar) (ou estar sobre…) às… horas.</Article>
              <Article>QRG:	Qual é minha frequência exata (ou frequência exata de…)?	Sua frequência exata (ou frequência exata de…) é… kHz (ou… MHz).</Article>
              <Article>QRH:	Minha frequência varia?	Sua frequência varia.</Article>
              <Article>QRI:	Como é a tonalidade de minha estação?	A tonalidade de sua estação é: Boa; Variável; Ruim</Article>
              <Article>QRJ:	Quantas chamadas radiotelefônicas você tem para despachar?	Eu tenho … chamadas radiotelefônicas para despachar.</Article>
              <Article>QRK:	Qual a clareza dos meus sinais (ou de…) ?	A clareza de seus sinais (ou dos sinais de) é: Ruim; Pobre; Razoável; Boa; Excelente.</Article>
              <Article>QRL:	Você está ocupado?	Estou ocupado (ou ocupado com…).Favor não interferir</Article>
              <Article>QRM: Está sendo interferido?</Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
              <Article></Article>
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

export default CodeQ;
