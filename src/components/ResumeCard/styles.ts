import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ITypeProps{
  type:"up" | "down" | "total";
}

export const Container = styled.View<ITypeProps>`
  background-color:${props =>
    props.type === "total" ? 
    props.theme.colors.secondary
    :
    props.theme.colors.shape
  };
  width:300px;
  border-radius:5px;
  padding:19px 23px;
  margin-right: 16px;
  padding-bottom:42px;
`;
export const Header = styled.View`
  flex-direction:row;
  justify-content:space-between;
`;

export const Title= styled.Text<ITypeProps>`
  color:${props =>
    props.type === "total" ? 
    props.theme.colors.shape
    :
    props.theme.colors.text_dark
  };
  font-family: ${(props)=>props.theme.fonts.regular};
  font-size: 14px;
`;

export const Icon= styled(Feather)<ITypeProps>`
  font-size:40px;
  color:${props => {
    if(props.type === "total"){
      return  props.theme.colors.shape;
    }else if (props.type === "up"){
      return  props.theme.colors.success;
    }else{
      return  props.theme.colors.attention;
    }
  }
  };
`;

export const Footer= styled.View``;

export const Amount= styled.Text<ITypeProps>`
  font-family: ${({theme})=>theme.fonts.medium};
  font-size:32px;
  color:${({theme,type})=>
    type==='total'?theme.colors.shape:theme.colors.text_dark};;
  margin-top: 38px;
`;

export const LastTransaction= styled.Text<ITypeProps>`
  font-family: ${({theme})=>theme.fonts.regular};
  font-size:12px;
  color:${(props)=>
    props.type==='total'?props.theme.colors.shape:props.theme.colors.text};
`;