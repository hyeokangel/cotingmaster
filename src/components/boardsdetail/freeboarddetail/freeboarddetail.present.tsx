import React from 'react';
import {
  ScrollView,
  Wrapper,
  TopImage,
  MainView,
  TopView,
  TopLeft,
  ProfileImage,
  NameView,
  Name,
  Date,
  TopRight,
  LikeView,
  LikeButton,
  Like,
  LikeSu,
  Title,
  Contents,
} from './freeboarddetail.styles';
import { useNavigation } from '@react-navigation/native';

const FreeBoardDetailUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Wrapper>
        <TopImage></TopImage>
        <MainView>
          <TopView>
            <TopLeft>
              <ProfileImage
                source={require('../../../../public/images/defaultprofile2.png')}
              />
              <NameView>
                <Name>{props.data?.fetchUseditem.seller.name}</Name>
                <Date>{props.data?.fetchUseditem.createdAt.slice(0, 10)}</Date>
              </NameView>
            </TopLeft>
            <TopRight>
              <LikeView>
                <LikeButton onPress={props.onPressLike}>
                  <Like>♥</Like>
                </LikeButton>
                <LikeSu>{props.data?.fetchUseditem.pickedCount}</LikeSu>
              </LikeView>
            </TopRight>
          </TopView>
          <Title>{props.data?.fetchUseditem.name}</Title>
          <Contents>{props.data?.fetchUseditem.contents}</Contents>
        </MainView>
      </Wrapper>
    </ScrollView>
  );
};

export default FreeBoardDetailUI;
