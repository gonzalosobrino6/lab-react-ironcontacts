import React, { Component } from 'react';

import celebrities from '../../data/contacts.json'

const CelebrityItem = (props) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td><img src={props.pictureUrl}/></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>
  )
}

export default CelebrityItem;