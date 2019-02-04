
export default function requestData(url, options){
    const baseURL = 'https://my-json-server.typicode.com/tagea/json/';
    return fetch(`${baseURL}${url}`,options)
        .then((response) => response.json())
        .catch(err => console.error(err))         
} 
