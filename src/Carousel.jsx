import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };

  // if we dont pass any props, show default images.
  static defaultProps = {
    images: "",
  };

  // event listener

  toggleImageActive = (event) => {
    this.setState({

      // unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.
      // because DOM always returns string?
      active: +event.target.dataset.index,
    });
  };

  render() {
    // this.state is the mutable state of the component (like useState). You'll use this.setState to mutate it (don't modify it directly.)
    const { active } = this.state;

    //     this.props comes from the parent component, similar to parameter given to the render functions that we pull props out of.
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.toggleImageActive}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
