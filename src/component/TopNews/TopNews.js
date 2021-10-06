import React, { useEffect, useState } from 'react';

const TopNews = () => {

    const [articalse, setArticalse] = useState([]);

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-06&sortBy=publishedAt&apiKey=16bf497084994fd680ddd6703277f66a';
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setArticalse(data.articalse))
    },[])
    return (
        <div>
            <h3>This data{articalse.length}</h3>
        </div>
    );
};

export default TopNews;