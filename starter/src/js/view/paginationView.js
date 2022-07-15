import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const clicked = e.target.closest('.btn--inline');
      if (!clicked) return;

      const goto = +clicked.dataset.goto;
      console.log(goto);

      handler(goto);
    });
  }

  _generateMarkupButtonLeft(curPage) {
    return `
        <button data-goto= "${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        `;
  }

  _generateTotalPage() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    return `
      <div class="btn--inline-page"
      <span> ${numPages} Pages </span>
      </div>
    `;
  }

  _generateMarkupButtonRight(curPage) {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    return `
    <button data-goto= "${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button> 
    `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `${this._generateTotalPage()}${this._generateMarkupButtonRight(
        curPage
      )}`;
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return `${this._generateMarkupButtonLeft(
        curPage
      )}${this._generateTotalPage()}`;
    }

    // Other Page
    if (curPage < numPages) {
      const left = this._generateMarkupButtonLeft(curPage);
      const pages = this._generateTotalPage();
      const right = this._generateMarkupButtonRight(curPage);
      return `${left}${pages}${right}`;
    }

    // Page 1, and there are NO other pages
    return ``;
  }
}

export default new PaginationView();
