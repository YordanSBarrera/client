import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    // this.props.fetchStream(this.props.match.params.id);
    console.log(this.props.fetchStream(this.props.match.params.id));
  }
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.stream.id, formValues);
  };
  render() {
    //console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Stream Edit</h3>
        <div className="ui content">Title: {this.props.stream.title}</div>
        <div> Description: {this.props.stream.description}</div>
        <div>USERID: {this.props.stream.userId}</div>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={this.props.stream}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state.streams[ownProps.match.params.id]);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
