'use strict';

const e = React.createElement;

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      //return 'You liked this.';
      return e(
        'button',
        { onClick: () => this.setState({ liked: false }) },
        'Liked'
      );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#node_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Node));

