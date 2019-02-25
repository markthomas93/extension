import React from 'react';
import { ContentTitleTop } from '../../atoms';
import { AddNotice} from '../../molecules';
import { Notification, Notice} from '../../organisms';

const message = 'De nombreux clients mécontents de Pixmania et ses vendeurs s’expriment sur les '
    + 'réseaux sociaux depuis 2016. Les plaintes continuent en 2017 et 2018 si l’on se réfère au forum Que Choisir.';

export default ({ match, close }) => {
  return (
    <Notification close={close}>
      <ContentTitleTop>Notifications pour cette page</ContentTitleTop>
      <Notice
        id={1}
        match={match}
        type="Tip"
        message={message}
        contributor="Le Même en Mieux"
        source="https://forum.quechoisir.org/pixmania-avis-1285"
        likes={21}
        dislikes={3}
      />
      <Notice
        id={2}
        match={match}
        type="Rant"
        message={message}
        contributor="Le Même en Mieux"
        source="https://forum.quechoisir.org/pixmania-avis-1285"
        likes={21}
        dislikes={3}
        deleted
      />
      <AddNotice />
    </Notification>
  );
};
