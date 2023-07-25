import { Component } from 'react';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Api from './api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    showModal: false,
    searchValue: '',
    response: [],
    error: '',
    isLoading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue === this.state.searchValue ||
      this.state.searchValue === ''
    )
      return;

    this.handleSearch();
  }
  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });
      const arr = await Api({
        value: this.state.searchValue,
        page: this.state.page,
      });
      this.setState({ response: arr.data.hits });
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getRequestSearch = data => {
    this.setState({
      searchValue: data.search,
    });
  };
  togleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  changePage = () => {};
  render() {
    const { error, showModal, response, isLoading } =
      this.state;
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
        {isLoading && <h2>Загружаем...</h2>}
        {error && <h2>{error}</h2>}
        <Searchbar getSearch={this.getRequestSearch} />
        {showModal && (
          <ModalWindow
            onClose={this.togleShowModal}
          ></ModalWindow>
        )}
        {/* {response?.length === 0 && (
          <h2>Search is not found</h2>
        )} */}
        {response?.map(
          ({ id, pageURL, previewURL, user }) => (
            // console.log(id);

            <ImageGallery
              id={id}
              pageURL={pageURL}
              previewURL={previewURL}
              user={user}
            />
          )
        )}

        {response === [] && (
          <Button onClick={this.changePage} />
        )}
      </div>
    );
  }
}
export default App;
