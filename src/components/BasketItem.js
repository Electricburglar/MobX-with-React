import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const BasketItem = ({ name, price, count, onTake }) => {
  return (
    <BasketItemTemplate>
      <Name>{name}</Name>
      <Price>{price}원</Price>
      <Count>{count}</Count>
      <Return onClick={() => onTake(name)}>갖다놓기</Return>
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