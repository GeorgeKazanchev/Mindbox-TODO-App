import React from 'react';
import * as styles from './Header.module.scss';

export default function Header(): React.ReactNode {
  return (
    <div className={styles.header}>
      <span className={styles.preTitle}>You favorite</span>
      <h1 className={styles.title}>TODO</h1>
    </div>
  );
}
