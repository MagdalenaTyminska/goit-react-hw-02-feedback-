import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export function Notification({ message }) {
  return (
    <>
      <span className={css.notificationText}>{message}</span>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
