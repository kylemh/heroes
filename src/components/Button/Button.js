import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.scss';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['hero', 'villain', 'neutral', 'success', 'warning', 'white', 'black']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  color: 'hero',
  disabled: false,
  fullWidth: false,
  loading: false,
  onClick: () => {},
  size: 'medium',
  style: {},
  tabIndex: 0,
  type: 'button',
};

function Button(props) {
  const onButtonClickHandler = ev => {
    if (typeof props.onClick === 'function') {
      ev.preventDefault();
      props.onClick(ev);
    }
  };

  const getButtonColorClassName = () => {
    const { color } = props;
    return color ? getClassNameByKey(color, 'BtnColor') : '';
  };

  const getButtonSizeClassName = () => {
    const { size } = props;
    return size ? getClassNameByKey(size, 'BtnSize') : '';
  };

  const getClassNameByKey = (keyString = '', postfix) => {
    const styleKey = keyString + postfix;
    return styles[styleKey] || '';
  };

  return (
    <button
      className={classNames(
        styles.Button,
        getButtonColorClassName(),
        getButtonSizeClassName(),
        props.className,
        { [styles.fullWidth]: props.fullWidth }
      )}
      disabled={props.disabled || props.loading}
      onClick={onButtonClickHandler}
      style={props.style}
      tabIndex={props.tabIndex}
      type={props.type}
    >
      {props.loading ? '...' : props.children}
    </button>
  );
}

export default Button;
