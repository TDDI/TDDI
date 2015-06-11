var React = require('react');

var MoviePlayer = React.createClass({

  render: function() {

    return (
      <span>
      <div className={ "movieContainer " + this.props.movieState.toggle }>
        <video className="TsarBomba" muted controls>
          <source src="https://www.googledrive.com/host/0B_8_iqiUbfc6Z3pWN3FtdnNNZTA" type="video/mp4" /> 
          Your browser does not support HTML5 Video
        </video>
      </div>
      <div className={ "movieoverlay " + this.props.movieState.toggle } onClick={ this.props.toggleVideo } />
      </span>
    )
  }
})

module.exports = MoviePlayer;