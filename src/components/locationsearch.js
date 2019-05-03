import React, { useState } from 'react';
import styles from './LocationSearch.module.css';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

export default(props) => {
  const searchClient = algoliasearch(
  'QLMLIFLF87',
  '61e837f421da50253990812e9716a46b'
  )

  return(
    <InstantSearch
  indexName="instant_search"
  searchClient={searchClient}
  >
    <SearchBox />
    </InstantSearch>

  )
}
