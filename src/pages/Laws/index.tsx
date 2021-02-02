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

const Laws: React.FC<Props> = ({ navigation }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <HeaderNav />
      <Content>
        <Buttons>
          <TextContainer>
            <ShoppingButtonInfo>
              <Title>LEI Nº 11.901, DE 12 DE JANEIRO DE 2009.</Title>
              <Subtitle>Dispõe sobre a profissão de Bombeiro Civil e dá outras providências.</Subtitle>
              <Article>
                Art. 1o O exercício da profissão de Bombeiro Civil reger-se-á
                pelo disposto nesta Lei.
              </Article>
              <Article>
                Art. 2o Considera-se Bombeiro Civil aquele que, habilitado nos
                termos desta Lei, exerça, em caráter habitual, função remunerada
                e exclusiva de prevenção e combate a incêndio, como empregado
                contratado diretamente por empresas privadas ou públicas,
                sociedades de economia mista, ou empresas especializadas em
                prestação de serviços de prevenção e combate a incêndio.
              </Article>
              <Article>§ 1o (VETADO)</Article>
              <Article>
                § 2o No atendimento a sinistros em que atuem, em conjunto, os
                Bombeiros Civis e o Corpo de Bombeiros Militar, a coordenação e
                a direção das ações caberão, com exclusividade e em qualquer
                hipótese, à corporação militar.
              </Article>
              <Article>Art. 3o  (VETADO) </Article>
              <Article>Art. 4o  As funções de Bombeiro Civil são assim classificadas: </Article>
              <Article>I - Bombeiro Civil, nível básico, combatente direto ou não do fogo;</Article>
              <Article>II - Bombeiro Civil Líder, o formado como técnico em prevenção e combate a incêndio, em nível de ensino médio, comandante de guarnição em seu horário de trabalho; </Article>
              <Article>III - Bombeiro Civil Mestre, o formado em engenharia com especialização em prevenção e combate a incêndio, responsável pelo Departamento de Prevenção e Combate a Incêndio. </Article>
              <Article>Art. 5o  A jornada do Bombeiro Civil é de 12 (doze) horas de trabalho por 36 (trinta e seis) horas de descanso, num total de 36 (trinta e seis) horas semanais. </Article>
            
              <Article>Art. 6o  É assegurado ao Bombeiro Civil: </Article>
              <Article>I - uniforme especial a expensas do empregador; </Article>
              <Article>II - seguro de vida em grupo, estipulado pelo empregador; </Article>
              <Article>III - adicional de periculosidade de 30% (trinta por cento) do salário mensal sem os acréscimos resultantes de gratificações, prêmios ou participações nos lucros da empresa; </Article>
              <Article>IV - o direito à reciclagem periódica. </Article>
              <Article>Art. 7o  (VETADO) </Article>
              <Article>Art. 8o  As empresas especializadas e os cursos de formação de Bombeiro Civil, bem como os cursos técnicos de segundo grau de prevenção e combate a incêndio que infringirem as disposições desta Lei, ficarão sujeitos às seguintes penalidades: </Article>
              <Article>I - advertência; </Article>
              <Article>II - (VETADO) </Article>
              <Article>III - proibição temporária de funcionamento; </Article>
              <Article>IV - cancelamento da autorização e registro para funcionar.</Article>
              <Article>Art. 9o  As empresas e demais entidades que se utilizem do serviço de Bombeiro Civil poderão firmar convênios com os Corpos de Bombeiros Militares dos Estados, dos Territórios e do Distrito Federal, para assistência técnica a seus profissionais. </Article>
              <Article>Art. 10.  (VETADO) </Article>
              <Article>Art. 11.  Esta Lei entra em vigor na data de sua publicação. </Article>
              <Article>Brasília,  12  de  janeiro  de 2009; 188o da Independência e 121o da República.  </Article>
              <Subtitle>LUIZ INÁCIO LULA DA SILVA</Subtitle>
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

export default Laws;
