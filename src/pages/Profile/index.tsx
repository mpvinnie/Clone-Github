import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'mpvinnie'}
            name={'Vinicius Malafaia'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/61069632?v=4'}
            followers={4}
            following={3}
            company={'MP Vinnie'}
            location={'Manaus, Brazil'}
            email={'vinniemalafaia@hotmail.com'}
            blog={'https://www.linkedin.com/in/vinicius-malafaia-2b8a50196'}
          />
            
        </LeftSide>

        <RightSide>

        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
