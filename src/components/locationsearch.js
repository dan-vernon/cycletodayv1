import React, { useState } from 'react';
import styles from './LocationSearch.module.css';

import algoliasearch from 'algoliasearch/lite';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import Hit from './hit.js'

export default(props) => {
  const searchClient = algoliasearch(
  'QLMLIFLF87',
  '61e837f421da50253990812e9716a46b'
  )

  return(
  <InstantSearch
    indexName="dev_METO_PLACES"
    searchClient={searchClient}
  >
    <Configure
      hitsPerPage={6}
      aroundLatLngViaIP="true"
      typoTolerance="min"
    />
    <SearchBox
      searchAsYouType={true}/>
    <Hits hitComponent={Hit} />
  </ InstantSearch>

  )
}
