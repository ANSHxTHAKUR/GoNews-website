// context Creation
// provider

import React,{useContext, useReducer,useEffect } from "react";
import reducer from "./reducer";
import { input } from "./components/Search";

let api = "https://hn.algolia.com/api/v1/search?";

  const initialState={
    isLoading:true,
    query:"CSS",
    nbPages:0,
    page:0,
    hits:[]
  }
const AppContext = React.createContext();


const AppProvider = ({children})=>{

const [state,dispatch] = useReducer(reducer,initialState);
  
    const fetchApi = async(url)=>{

        dispatch({type:"SET_LOADING"});

      try {
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(data);
        
        dispatch({type:"GET_STORIES",
        payload :{
          hits:data.hits,  // ye just ek variable hai jo mai pass karunga mere reducer function mai
          nbPages:data.nbPages,
          page:data.page,
        }           
      });
      
    } catch (error) {
      console.log(error);
    }
  }

  // to remove the post 
   
  const removePost = (post_ID)=>{
   dispatch({type: "REMOVE_POST"  , payload : post_ID});
  }

  // search
   const searchPost = (searchQuery) => {
  dispatch({
    type: "SEARCH_QUERY",
    payload: searchQuery,
  });
};

 // pagination
 const getNextPage = () => {
  dispatch({
    type: "NEXT_PAGE",
  });
};

const getPrevPage = () => {
  dispatch({
    type: "PREV_PAGE",
  });
};


    useEffect(()=>{
    
      fetchApi(`${api}query=${state.query}&page=${state.page}`);
      
    },[ state.query,state.page])




    return (
  <AppContext.Provider value={{...state , removePost ,searchPost , getNextPage , getPrevPage} }>
        {children}
     </AppContext.Provider>

    )
};
const useGlobalcontext = ()=>{
    return useContext(AppContext);
}
export{
    AppProvider,AppContext, useGlobalcontext   
};

// use custom hook 

