import React, {useState, ChangeEvent} from 'react';

import SideMenu from '../../assets/components/SideMenu/SideMenu';
import Header from '../../assets/components/Header/Header';
import PageSelect from '../../assets/components/PageSelect/PageSelect';

import './styles.scss';


const Search = () => {
  const [inputValue, setInputValue] = useState('0')
  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const data = event.target.value;
    setInputValue(data)
  }
  return (
    <>
      <SideMenu />
      <Header autoFocus={true}/>
      <div className="container">
        
      </div>
      {/* <PageSelect/> */}
    </>
  );
}

export default Search;