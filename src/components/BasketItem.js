import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const BasketItem = ({ item, onTake }) => {
  return (
    <BasketItemTemplate>
      <Name>{item.name}</Name>
      <Price>{item.price}원</Price>
      <Count>{item.count}</Count>
      <Return onClick={() => onTake(item.name)}>갖다놓기</Return>
    </BasketItemTemplate>
  );
};

const BasketItemTemplate = styled.div`
    display: flex;
    width: 100%;
`
const Name = styled.div`
    flex: 2;
`
const Price = styled.div`
    flex: 1;
`
const Count = styled.div`
    flex: 1;
`
const Return = styled.div`
    margin-left: auto;
    color: #f06595;
    cursor: pointer;
    text-decoration: underline;
`

export default observer(BasketItem);