import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStars: 0,
      averageRating: 0,
    };
  }

  handleClick = (stars) => {
    this.setState({ selectedStars: stars }, () => {
      this.calculateAverageRating();
    });
  };

  calculateAverageRating = () => {
    const { selectedStars } = this.state;
    const average = selectedStars === 0 ? 0 : selectedStars / 5;
    this.setState({ averageRating: average });
  };

  render() {
    const { selectedStars, averageRating } = this.state;

    return (
      <div>
        <div>
          <span>Selected Stars: {selectedStars}</span>
          <br />
          <span>Average Rating: {averageRating}</span>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((stars) => (
            <button
              key={stars}
              onClick={() => this.handleClick(stars)}
              style={{
                color: selectedStars >= stars ? 'gold' : 'gray',
                background: 'none',
                border: 'none',
                fontSize: '32px',
              }}
            >
              &#9733;
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default StarRating;