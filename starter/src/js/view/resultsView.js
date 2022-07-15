import View from './View';
import previewView from './previewView';

class ResultView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'There was no result for your query, try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();
