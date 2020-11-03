import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props);
// 分割代入でリファクト
  const { name, price } = state;
return (
    <>
    <p>現在の{name}は、{price}円です。</p>
    <button onClick={() => setState({...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: price - 1})}>-1</button>
    <button onClick={() => setState(props)}>Reset</button>
    <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

//propsのデフォルト値を設定
App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
