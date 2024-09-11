import { useEffect, useState } from 'react';

function useTabTitle(pageName) {
    const [title , setTitle] = useState('Atz SSS');
    
    useEffect(()=>{
        setTitle(`${pageName} - ${title}`);
    },[]);

    window.document.title = title;
}

export default useTabTitle;