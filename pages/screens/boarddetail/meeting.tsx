import React from 'react';
import MeetingDetailContainer from '../../../src/components/boardsdetail/meetingdetail/meetingdetail.container';
import CommentList from '../../../src/components/comment/comment_list/CommentList.container';
import CommentWrite from '../../../src/components/comment/comment_write/CommentWrite.container';
import { gql, useQuery } from '@apollo/client';
import { ScrollView } from 'react-native';
import { useState } from 'react';

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
      createdAt
    }
  }
`;

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      createdAt
      updatedAt
      pickedCount
      remarks
      contents
      price
      images
      seller {
        name
        picture
      }
    }
  }
`;

const MeetingDetailScreen = ({ route }: any) => {
  const [QId, setQId] = useState('');

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(route.params.id) },
  });

  const { data: usedItemdata } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(route.params.id),
    },
  });

  return (
    <ScrollView>
      <MeetingDetailContainer route={route} />
      <CommentWrite usedItemdata={usedItemdata} setQId={setQId} />
      {data?.fetchUseditemQuestions.map(el => (
        <CommentList
          QId={QId}
          usedItemdata={usedItemdata}
          key={el._id}
          el={el}
          id={el._id}
        />
      ))}
    </ScrollView>
  );
};

export default MeetingDetailScreen;
