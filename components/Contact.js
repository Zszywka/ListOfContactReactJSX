// single contact
var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      // React.createElement('div',{className: 'contactItem'},
      <div className={'contactItem'}>
        // React.createElement('img', {className: 'contactImage', src: this.props.item.photo}),
        <figure>
          <img className={'contactImage'} src={this.props.item.photo}></img>
        </figure>
        // React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
        <p className={'contactLabel'}>
          Name: {this.props.item.firstName}
        </p>
        // React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
        <p className={'contactLabel'}>
          Surname: {this.props.item.lastName}
        </p>
        // React.createElement('a', {className: 'contactEmail', href: "Email " + this.props.item.email}, 'Email: ' + this.props.item.email)
        <a className={'contactEmail'} href={'Email ' + this.props.item.email}>
          Email: {this.props.item.email}
        </a>
      </div>
    )
  },
});
