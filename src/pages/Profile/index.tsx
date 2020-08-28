import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading
} from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

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
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'mpvinnie'}
                  reponame={'Proffy'}
                  description={'Plataforma Online de Ensino - Next Level Week 2.0'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={11}
                  forks={3}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
