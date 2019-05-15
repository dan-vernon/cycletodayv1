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
      hitsPerPage={3}
      aroundLatLngViaIP="true"
      typoTolerance="min"
    />
          <h3>
      Select or search for your closest location
      </h3>

    <SearchBox
      searchAsYouType={true}
      autoFocus={true}
      translations={{
      submitTitle: 'Submit your location',
      resetTitle: 'Reset',
      placeholder: 'Enter your location...',
      }}
      />
    <Hits hitComponent={Hit} />
  </ InstantSearch>

  )
}
