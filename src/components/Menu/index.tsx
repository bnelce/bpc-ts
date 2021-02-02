import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import Animated, {
  call,
  cond,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import { timing } from "react-native-redash/lib/module/v1";

import { useIsFirstRender } from "../../hooks/useIsFirstRender";

//import SVGLoader from "../SVGLoader";
import CustomIcon from "../CustomIcon";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'; 

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import {  MenuItemContainer, MenuItem, Icon, MenuItemTitle } from "./styles";

const items = [
  {
    icon: <Feather name="bar-chart" size={30} color="#ff8700" />,
    title: "Dashboard",
    route: "Laws",
  },
  {
    icon: <FontAwesome name="fire-extinguisher" size={30} color="#ff8700" />,
    title: "Ocorrências",
    route: "Laws",
  },
  {
    icon: <FontAwesome name="newspaper-o" size={30} color="#ff8700" />,
    title: "Notícias",
    route: "Laws",
  },
  {
    icon: <MaterialCommunityIcons name="brain" size={30} color="#ff8700" />,
    title: "Escala de Glasgow",
    route: "Laws",
  },
  {
    icon: <Octicons name="law" size={30} color="#ff8700" />,
    title: "Legislação",
    route: "Laws",
  },
  {
    icon: <Octicons name="checklist" size={30} color="#ff8700" />,
    title: "NBRs",
    route: "CodeMenu",
  },
  {
    icon: <Feather name="radio" size={30} color="#ff8700" />,
    title: "Códigos Operacionais",
    route: "CodeMenu",
  },
  {
    icon: <FontAwesome name="graduation-cap" size={30} color="#ff8700" />,
    title: "Cursos",
    route: "CodeMenu",
  },
  {
    icon: <AntDesign name="shoppingcart" size={30} color="#ff8700" />,
    title: "Loja",
    route: "CodeMenu",
  }
];

interface MenuItemProps {
  icon: string | JSX.Element;
  title: string;
  route: string;
}

interface Props {
  handleScrollToTop: () => void;
  menuIsExpanded: boolean;
  navigation: void;
}

const Menu: React.FC<Props> = ({ handleScrollToTop, menuIsExpanded, navigation }) => {
  const isFirstRender = useIsFirstRender();

  const menuHeight = useValue(
    isFirstRender ? 115 : 120 * Math.ceil(items.length / 3)
  );
  const menuItemTranslateY = useValue(-30);

  useCode(
    () => [
      cond(Number(!menuIsExpanded), [
        set(menuHeight, timing({ from: menuHeight, to: 115 })),
        set(menuItemTranslateY, timing({ from: menuItemTranslateY, to: -30 })),
        call([], handleScrollToTop),
      ]),
      cond(Number(menuIsExpanded), [
        set(
          menuHeight,
          timing({
            from: menuHeight,
            to: 120 * Math.ceil(items.length / 3),
            duration: 300,
          })
        ),
        set(
          menuItemTranslateY,
          timing({ from: menuItemTranslateY, to: 0, duration: 300 })
        ),
      ]),
    ],
    [menuIsExpanded]
  );

  return (
    <AnimatedFlatList
      data={items}
      renderItem={({ item, index }: ListRenderItemInfo<MenuItemProps>) => (
          <MenuItemContainer
            style={{
              transform: [
                {
                  translateY:
                    index > 2 ? menuItemTranslateY : new Animated.Value(0),
                },
              ],
              opacity:
                index > 2
                  ? menuItemTranslateY.interpolate({
                      inputRange: [-30, 0],
                      outputRange: [0, 1],
                      extrapolate: Extrapolate.CLAMP,
                    })
                  : 1,
            }}
          >
            <MenuItem onPress={() => navigation.navigate(item.route)}>
              <Icon>
                {typeof item.icon === "string" ? (
                  <CustomIcon name={item.icon} size={30} color="#ff8700" />
                ) : (
                  item.icon
                )}
              </Icon>
              <MenuItemTitle>{item.title}</MenuItemTitle>
            </MenuItem>
          </MenuItemContainer>
      )}
      keyExtractor={(item: MenuItemProps) => item.title}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        justifyContent: "space-between",
      }}
      scrollEnabled={false}
      style={{ height: menuHeight }}
    />
  );
};

export default Menu;
