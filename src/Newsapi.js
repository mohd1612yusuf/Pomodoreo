import React, { useState, useEffect } from 'react';
import Newsdisplay from './Newsdisplay';

function Newsapi() {
    const [articles, setArticles] = useState([]);

    async function fetchnews() {
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-12-24&sortBy=publishedAt&apiKey=1df1338101454c0c9944f47f829acece";
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.articles);
    }

    useEffect(() => {
        fetchnews();
    }, []); // Correct usage of useEffect with dependency array

    return (
        <div>
            {articles.map((item, index) => (
                <Newsdisplay 
                    key={index} // Use index as fallback in case the title is not unique
                    title={item.title} 
                    description={item.description} 
                    url={item.url} 
                    image={item.urlToImage} 
                />
            ))}
            <button onClick={fetchnews}>Get News</button>
        </div>
    );
}

export default Newsapi;
