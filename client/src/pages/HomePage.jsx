import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Loader, Shop } from '../components';
    
function HomePage({ state, addCartItem }) {
   
    const [path, setPath] = useState(null);
    // const [activePath, setActivePath] = useState('');
    // const [disabled, setDisabled] = useState(false)

    const shopDataFromPath = state.find(shop => shop.title === path);

    // const togglePath = () => {
    //     if (path === activePath) {
    //        setDisabled(false) 
    //    } setDisabled(false)
    // }

    return (
        <>
            {state?.length === 0
                ? <Loader />
                : <nav className='nav'>
                <ul className='stores-list'>
                    {state.map(store =>
                        <li key={store._id}>
                            <Link to={`/${store.title}`}>
                                <button
                                    onClick={() => {setPath(store.title)}}
                                    // disabled={path !== store.title && path !== null}
                                >
                                    {store.title}
                                </button>
                            </Link>
                        </li>)
                    }
                </ul>
            </nav>}
            {path && <Routes>
                <Route
                    path={`/${path}`}
                    element={<Shop
                        data={shopDataFromPath}
                        addCartItem={addCartItem}
                    />}
                />
            </Routes>}
        </>
    );
}

export default HomePage
