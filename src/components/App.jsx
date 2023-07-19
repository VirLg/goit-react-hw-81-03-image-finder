import { Component } from 'react';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    showModal: false,
  };

  getRequestSearch = data => {
    console.log(data);
    this.setState({
      search: data.search,
    });
  };
  togleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar getSearch={this.getRequestSearch} />
        {this.state.showModal && (
          <ModalWindow onClose={this.togleShowModal}></ModalWindow>
        )}
      </div>
    );
  }
}
export default App;
