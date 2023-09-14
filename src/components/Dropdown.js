import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import '../style/Dropdown.css';

class Dropdown extends React.Component {
  state = {
    open: false,
    selection: [],
  }

  toggle(vars){
    this.setState({open:vars});
  }

  handleClickOutside = evt => {
    this.setState({open: false});
  };

  handleOnClick(item) {
    if (!this.state.selection.some(current => current.id === item.id)) {
      this.state.selection = [item];
    } else {
      let selectionAfterRemoval = this.state.selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      this.state.selection = [...selectionAfterRemoval];
    }
  }

  isItemInSelection(item) {
    if (this.state.selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  render() {
    return (
        <div className="dd-wrapper">
          <div
              tabIndex={0}
              className="dd-header"
              role="button"
              onKeyPress={() => this.toggle(!this.state.open)}
              onClick={() => this.toggle(!this.state.open)}
          >
            <div className="dd-header__title">
              <p className="dd-header__title--bold">{this.props.title}</p>
            </div>
            <div className="dd-header__action">
            </div>
          </div>
          {this.state.open && (
              <ul className="dd-list">
                {this.props.items.map(item => (
                    <li className="dd-list-item" key={item.id}>
                      <button type="button" onClick={() => this.handleOnClick(item)}>
                        <span>{item.value}</span>
                      </button>
                    </li>
                ))}
              </ul>
          )}
        </div>
    );
  }
}

export default onClickOutside(Dropdown);
