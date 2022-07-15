import View from './View';
import previewView from './previewView';

class BookmarkView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _data;
  _errorMessage = 'No Bookmark yet, find a recipe and bookmark it :)';
  _message = '';

  addHanderRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarkView();
