import React from "react";
import { Dimensions } from "react-native";
import Animated, { Extrapolate, useValue } from "react-native-reanimated";

import Card from "../Card";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width * 0.83;
const CARD_PADDING = (width - CARD_WIDTH) / 2;

import { Wrapper, Container } from "./styles";
import InfoCard from "../InfoCard";

const CardList: React.FC = () => {
  const offsetX = useValue(0);

  return (
    <Wrapper
      horizontal
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={CARD_WIDTH}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={1}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: offsetX,
            },
          },
        },
      ])}
    >
      <Container
        style={{
          paddingLeft: offsetX.interpolate({
            inputRange: [0, CARD_WIDTH],
            outputRange: [CARD_PADDING / 2, CARD_PADDING],
            extrapolate: Extrapolate.CLAMP,
          }),
          paddingRight: CARD_PADDING / 2,
        }}
      >
        <Card
          index={0}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon="shield-lock"
          title="Ocorrências"
          description="Registre suas ocorrências com praticidade e consulte sempre que precisar."
          image={{ name: "banner_oco", width: 140, height: 108 }}
        />
        <Card
          index={1}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon="extract"
          title="Notícias"
          description="Informe-se com as principais notícias sobre bombeiros civis e militares!"
          image={{ name: "banner_news", width: 120, height: 113 }}
        />
        <Card
          index={2}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon={{ name: "card", width: 30, height: 20 }}
          title="Escala de Glasgow"
          description="Consulte rapidamente a Escala de coma de Glasgow e esteja mais preparado nas ocorrências"
          image={{ name: "banner_glasgow", width: 120, height: 113 }}
        />
        <Card
          index={3}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon={{ name: "pai_logo", width: 30, height: 20 }}
          title="Códigos operacionais"
          description="Tenha sempre em mãos os códigos utilizados na comunicação operacional."
          image={{ name: "banner_code", width: 120, height: 113 }}
        />
      </Container>
    </Wrapper>
  );
};

export default CardList;
