
export default function requestData(url, options){
    const baseURL = '/';
    return fetch(`${baseURL}${url}`,options)
        .then((response) => response.json())
        .catch(err => console.error(err))         
} 