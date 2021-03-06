import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    // return null;
  }

  renderImput = ({ input, label, meta }) => {
    const classNameFiel = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={classNameFiel}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {/* <input onChange={formProps.input.onChange} value={formProps.input.value}/>*/}
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderImput}
          label="Entre un Titulo"
        />
        <br />
        <Field
          name="description"
          component={this.renderImput}
          label="Entre una descripcion"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Debes de entrar un Titulo";
  }
  if (!formValues.description) {
    errors.description = "debes de entrar una descripcion";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
