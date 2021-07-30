import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserloggedIn = false;

  return isUserloggedIn ? (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Leoander Neves
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in Github
    </button>
  );
};
