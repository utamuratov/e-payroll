export class Search {
  /**
   *
   */
  searchText: string;

  /**
   *
   */
  status: number;

  /**
   *
   */
  constructor(searchText: string = '', status: number = null) {
    this.searchText = searchText;
    this.status = status;
  }
}
