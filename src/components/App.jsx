import { Component } from 'react';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Api from './api/Api';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    showModal: false,
    searchValue: '',
    response: [],
  };
  s;
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue === this.state.searchValue)
      return;

    this.handleSearch(this.state.searchValue);
  }
  handleSearch = async () => {
    console.log(this.state.searchValue);
    const arr = await Api(this.state.searchValue);
    this.setState({ response: arr.data.hits });
  };

  getRequestSearch = data => {
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
        <ImageGallery value={this.state.response} />
      </div>
    );
  }
}
export default App;
