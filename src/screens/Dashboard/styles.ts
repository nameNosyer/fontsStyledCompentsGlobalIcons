import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize';

import {DataProps} from '../../data/transactions';

type props = {
  index?:number;
}

export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background-color:${(props)=>props.theme.colors.primary};
  height:278px ;
  justify-content: center;
  flex-direction:row;
  align-items: flex-start;
`;

export const UserContainer = styled.View`
width: 100%;
 padding:0 24px;
 margin-top:53px;
 flex-direction:row;
 justify-content: space-between;
 align-items: center;
`;
export const UserInfo = styled.View`
  flex-direction:row;
  align-items: center;
`;

export const Photo = styled.Image`
  width:50px;
 height:50px;
 border-radius:10px;
`;
export const User = styled.View`
 margin-left:20px;
`;

export const UserGreeting = styled.Text`
  color:${(props)=>props.theme.colors.shape};
  font-family: ${(props)=>props.theme.fonts.regular};
  font-size:${({theme})=>theme.fontSize.md}px;
`;
export const UserName = styled.Text`
  color:${(props)=>props.theme.colors.shape};
  font-family: ${(props)=>props.theme.fonts.bold};
  font-size:${({theme})=>theme.fontSize.md}px;
`;

export const IconPower = styled(Feather)`
  color:${(props)=> props.theme.colors.secondary};
`;

export const ResumeCards = styled.ScrollView`
  position:absolute;
  width:100%;
  margin-top:130px;
`;

export const TransactionsContainer = styled.View`
  flex:1;
  padding:0 24px;

  margin-top: 84px;
`;

export const Title = styled.Text`
  font-size:18px;
  font-family: ${({theme})=>theme.fonts.regular};
  margin-bottom:10px;
`;
