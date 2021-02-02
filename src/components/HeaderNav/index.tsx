import React, { useState } from "react";
import { Dimensions } from "react-native";
import { State } from "react-native-gesture-handler";
import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'; 
import { add } from "react-native-reanimated";
import {
  cond,
  eq,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import {
  snapPoint,
  timing,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";

import { useAuth } from "../../contexts/auth";

import CustomIcon from "../../components/CustomIcon";

import {
  Container,
  HeaderContent,
  AccountInfo,
  LeftSide,
  AccountBalanceLabel,
  AccountBalanceRow,
  AccountBalance,
  AccountBalanceCurrency,
  AccountBalanceValue,
  VisibilityToggle,
  AccountBalanceInfo,
  RightSide,
  Avatar,
  Initials,
  SideIndicator,
  ActiveIndicator
} from "./styles";

const { width } = Dimensions.get("window");

interface Props {
  navigation: void;
  title: string,
  subtitle: string,
  icon: string
}

const HeaderNav: React.FC<Props> = ({navigation, title, subtitle, icon}) => {

  const snapPoints = [-width - 20, (-width - 20) / 2, 0];

  const {
    gestureHandler,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const accountInfoTranslateX = useValue(0);
  const accountInfoOffsetX = useValue(0);
  const to = snapPoint(accountInfoTranslateX, velocity.x, snapPoints);

  const { signOut } = useAuth();

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(accountInfoTranslateX, add(accountInfoOffsetX, translation.x))
      ),
      cond(eq(state, State.END), [
        set(accountInfoTranslateX, timing({ from: accountInfoTranslateX, to })),
        set(accountInfoOffsetX, accountInfoTranslateX),
      ]),
    ],
    []
  );

  return (
    <Container>
      <HeaderContent>
          <AccountInfo
            style={{
              transform: [
                {
                  translateX: accountInfoTranslateX.interpolate({
                    inputRange: [(-width - 20) * 0.5, 0],
                    outputRange: [(-width - 20) * 0.5, 0],
                    extrapolate: Extrapolate.CLAMP,
                  }),
                },
              ],
            }}
          >
            <LeftSide
              style={{
                opacity: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [0, 1],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }}
            >
              <AccountBalanceRow>
                <AccountBalance>
                  <AccountBalanceValue>{title}</AccountBalanceValue>
                </AccountBalance>
              </AccountBalanceRow>
              <AccountBalanceInfo>{subtitle}</AccountBalanceInfo>
            </LeftSide>
          </AccountInfo>
          <Avatar>
            {/*<Octicons name="law" size={40} color="#ff500f" />*/}
            <Feather name="radio" size={40} color="#ff500f" />
        </Avatar>
      </HeaderContent>
      <SideIndicator>
        <ActiveIndicator
          style={{
            transform: [
              {
                translateX: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [31 + 5, 0],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
        >
        </ActiveIndicator>
      </SideIndicator>
    </Container>
  );
};

export default HeaderNav;
