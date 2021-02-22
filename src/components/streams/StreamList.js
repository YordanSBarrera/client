import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStreams();
  }
  renderAdmin() {
    // if (stream.userId === this.props.currentUserId) {
    return (
      <div className="right floated content">
        <button className="ui button primary">Edit</button>
        <button className="ui button negative">Eliminar</button>
      </div>
    );
    //  }
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          {this.renderAdmin()}
          <i className="large middle alingned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
