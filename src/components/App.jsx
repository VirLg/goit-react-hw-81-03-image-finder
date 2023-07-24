import { Component } from 'react';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Api from './api/Api';

class App extends Component {
  state = {
    showModal: false,
    searchValue: '',
    response: [],
  };

  componentDidUpdate() {
    this.handleSearch();
  }
  handleSearch = async () => {
    const arr = await Api(this.state.searchValue);
    this.setState({ response: arr.data.hits });
  };

  getRequestSearch = data => {
    console.log(data);
    this.setState({
      searchValue: data.search,
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
          <ModalWindow
            onClose={this.togleShowModal}
          ></ModalWindow>
        )}
      </div>
    );
  }
}
export default App;
