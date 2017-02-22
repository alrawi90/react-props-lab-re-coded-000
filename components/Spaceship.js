const React = require('react');
const Spaceship=class Spaceship extends React.Component {


render(){

return(

   <div className="Space-ship">
  
        <h2>{this.props.name}</h2>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets ? 'True' : 'False'}</h2>
        
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
	)}
	


 };



 Spaceship.defaultProps = {
  colors: ['black', 'red'],hasRockets: false
};


module.exports = Spaceship;