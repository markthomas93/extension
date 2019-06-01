import React, { Fragment } from 'react';
import Title from './Title';
import ButtonContainer from './ButtonContainer';
import Illustration from './Illustration';
import BorderButton from 'components/atoms/Buttons/BorderButton';

export default () => (
  <Fragment>
    <Title>Pas de Bulle ici</Title>
    <ButtonContainer>
      <Illustration />
      <BorderButton
        as="a"
        href="https://form.jotformeu.com/82702852284358"
        target="_blank"
        rel="noopener noreferrer"
      >
        Créer une Bulle
      </BorderButton>
    </ButtonContainer>
  </Fragment>
);
