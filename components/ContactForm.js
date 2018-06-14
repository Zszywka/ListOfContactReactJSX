// create a form:
var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      // React.createElement('form', {className: 'contactForm'},
      <form className = {'contactForm'}>
        <input
          type = {'text'}
          className = {'form-control'}
          placeholder = {'Write the Name'}
          value = {this.props.contact.firstName}>
        </input>

        <input
          type = {'text'}
          className = {'form-control'}
          placeholder = {'Write the Surname'}
          value = {this.props.contact.lastName}>
        </input>

        <input
          type = {'email'}
          className = {'form-control'}
          placeholder = {'Write the Email'}
          value = {this.props.contact.email}>
        </input>

        <input
          type = {'file'}
          className = {'form-control'}
          placeholder = {'Add photo'}
          value = {this.props.contact.photo}>
        </input>

        <button type = {'submit'} className = {'btn btn-primary'}>
         Add contact
        </button>
      </form>
    )
  },
});
