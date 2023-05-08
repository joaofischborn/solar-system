import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-cards" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img className="img" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
