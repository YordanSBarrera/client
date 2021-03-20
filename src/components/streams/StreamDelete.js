import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  renderAction() {
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            this.onDELETE();
          }}
        >
          DELETE
        </button>
        <Link to="/" className="ui button primary">
          Cancelar
        </Link>
      </React.Fragment>
    );
  }
  onDELETE() {
    this.props.deleteStream(this.props.id);
  }
  renderContent() {
    if (!this.props.stream) {
      console.log("mensaje de DELETE.");
      return "REALLY DELETE...???";
    }
    return (
      <div>
        Are you really want to Delete this Post with:
        <br />
        title: {this.props.stream.title}
        <br />
        {this.props.stream.description}
      </div>
    );
  }
  render() {
    if (!this.props.stream) {
      console.log(this.props.stream, "Cargando.....");
      return <div>Cargando...</div>;
    }
    return (
      <Modal
        title="Stream Delete"
        content={this.renderContent()}
        action={this.renderAction()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id, " id en Mapstate");
  return {
    stream: state.streams[ownProps.match.params.id],
    id: ownProps.match.params.id,
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
