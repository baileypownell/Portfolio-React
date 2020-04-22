import React from 'react';

import './Modal.scss';

class Modal extends React.Component {

  state = {
    textblurbs: [],
    images: [],
    place: 0
  }

  componentDidMount() {
    this.setState({
      textblurbs: this.props.textblurbs,
      images: this.props.images
    })
  }

  decrement = () => {
    if (this.state.place === 0) {
      this.setState(prevState => ({
        place: this.state.textblurbs.length-1
      }));
    } else {
      this.setState(prevState => ({
        place: prevState.place-1
      }));
    }
  }

  increment = () => {
    if (this.state.place === this.state.textblurbs.length-1) {
      this.setState({
        place: 0
      })
    } else {
      this.setState(prevState => ({
        place: prevState.place+1
      }));
    }
  }

  render() {
    return (
      <div className="modal">
      <i className="fas fa-times-circle" onClick={this.props.toggleModal}></i>
        <h2>{this.props.title}</h2>
        <div className="modal-layout">
          <i className="fas fa-chevron-circle-left" onClick={this.decrement}></i>
          <div>
            <img src={this.state.images[this.state.place]}/>
            <p>{this.state.textblurbs[this.state.place]}</p>
            {this.props.prod_link ? <a href={this.props.prod_link}><button>Visit Web App</button></a> : null}
          </div>
          <i className="fas fa-chevron-circle-right" onClick={this.increment}></i>
        </div>
      </div>
    )
  }
}

export default Modal;
