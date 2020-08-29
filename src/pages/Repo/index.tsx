import React from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className="username" to={'/mpvinnie'}>
          mpvinnie
        </Link>

        <span>/</span>

        <Link className="reponame" to={'/mpvinnie/Proffy'}>
          Proffy
        </Link>
      </BreadCrumb>

      <p>Plataforma online de estudos entre professores e alunos.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/mpvinnie/Proffy'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
