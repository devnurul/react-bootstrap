import React, { useEffect, useState } from 'react';
import Cart from '../news/Cart';

const TopNews = () => {

    const [articlse, setArticlse] = useState([]);

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-06&sortBy=publishedAt&apiKey=16bf497084994fd680ddd6703277f66a';
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setArticlse(data.articlse))
    },[])
    return (
        <div>
            {
                articlse.map(article => <Cart> </Cart>)
            }
        </div>
    );
};

export default TopNews;