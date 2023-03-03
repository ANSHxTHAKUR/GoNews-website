import React from 'react'
import { useGlobalcontext } from '../context';
let input;
const Search = () => {
  
    const { query, searchPost } = useGlobalcontext();
    return (
      <>
        <h1>Ansh Sengar GoNews Tech Website</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </>
    );
  
}

export  {Search,input}