export const load_genres = () => ({
    type: 'LOAD_GENRES'
});
  
export const loading_genres_success = (payload: any) => ({ 
    type: 'LOAD_GENRES_SUCCESS', 
    payload 
});