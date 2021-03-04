import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  renderAction() {
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            this.onDELETE();
            history.push("/");
          }}
        >
          DELETE
        </button>
        <button className="ui button primary">Cancel</button>
      </React.Fragment>
    );
  }
  onDELETE() {
    this.props.deleteStream(this.props.id);
  }
  renderContent() {
    return (
      <div>
        Are you really Delete this Post with:
        <br />
        title: {this.props.stream.title}
        <br />
        {this.props.stream.description}
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal
          title="Stream Delete"
          content={this.renderContent()}
          action={this.renderAction()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    id: ownProps.match.params.id,
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
