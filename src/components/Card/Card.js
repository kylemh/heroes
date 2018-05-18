import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import styles from './Card.scss';

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
  onClick: PropTypes.func,
};

export default function Card({ children, className, headerContent, footerContent, onClick }) {
  const header = headerContent ? (
    <CardHeader classNames={`${styles.header}`}>{headerContent}</CardHeader>
  ) : null;

  const footer = footerContent ? (
    <CardFooter classNames={`${styles.footer}`}>{footerContent}</CardFooter>
  ) : null;

  if (header && footer) {
    return (
      <article
        className={`${styles.Card} ${className}`}
        onClick={onClick}
      >
        {header}
        {children}
        {footer}
      </article>
    );
  }

  return (
    <div
      className={`${styles.Card} ${className}`}
      onClick={onClick}
    >
      {header}
      {children}
      {footer}
    </div>
  );
}
