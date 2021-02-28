import React from "react";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modalBody">
              <h1>Modal title</h1>
              <button onClick={() => this.setState({ isOpen: false })}>
                &times;
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
