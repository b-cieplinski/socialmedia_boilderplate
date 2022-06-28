import React, { useEffect, useState } from 'react'
import Story from './story'
import { faker } from '@faker-js/faker';
import ProfileSuggestions from './ProfileSuggestions'

const Suggestions = () => {
  const [suggestions, setSuggestions ] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
  }));
  setSuggestions(suggestions)
}, [])

  return (
    <div>
        {suggestions.map(profile => (
            <ProfileSuggestions key={profile.id} userImg={profile.avatar} username={profile.username}/>
        ))}
    </div>
  )
}

export default Suggestions