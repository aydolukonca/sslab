//Bu dosya title bileşeni altında bir liste görüntüler ve data özelliği, verilen obje dizisini ekranda liste şeklinde görüntüler.


import React from 'react';

const DataList = ({ title, data, text, number }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
};

const App = () => {
  const sampleData = [{ name: 'Alice' }, { name: 'Bob' }];

  return (
    <div>
      <DataList
        title="Veri Listesi"
        data={sampleData}
        text="Merhaba, React!"
        number={42}
      />
    </div>
  );
};

export default App;
