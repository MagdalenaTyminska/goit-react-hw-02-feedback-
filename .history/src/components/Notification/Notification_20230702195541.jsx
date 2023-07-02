import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <>
        <span className={css.notificationText}>{message}</span>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
