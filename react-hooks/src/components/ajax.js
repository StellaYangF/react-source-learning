import React, { useState, useEffect } from 'react';

function useRequest(url) {
  let limit = 5;
  let [offset, setOffset] = useState(0);
  let [data, setData] = useState([]);

  function loadMore() {
    setData(null);
    fetch(`${url}?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then(pageData => {
        setData([ ...data, ...pageData ]);
        setOffset(offset => offset + pageData.length)
      });
  }
  useEffect(loadMore, []);
  return [ data, loadMore ]
}


export default function () {
  const [users, loadMore] = useRequest('http://localhost:8000/api/users');
  if (!users || !users.length) return <div>正在加载中……</div>
  return (
    <>
      <ul>
          {
              users.map((item, index) => <li key={index}>{item.id}:{item.name}</li>)
          }
      </ul>
      <button onClick={loadMore}>加载更多</button>
    </>
  )
}