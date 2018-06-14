// single contact
var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <figure>
          <img className={'contactImage'} src={this.props.item.photo}></img>
        </figure>

        <p className={'contactLabel'}>
          Name: {this.props.item.firstName}
        </p>

        <p className={'contactLabel'}>
          Surname: {this.props.item.lastName}
        </p>

        <a className={'contactEmail'} href={'Email: ' + this.props.item.email}>
          Email: {this.props.item.email}
        </a>
      </div>
    )
  }
});
