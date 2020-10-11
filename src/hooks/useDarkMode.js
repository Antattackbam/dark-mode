import {useLocalStorage} from './useLocalStorage';

const useDarkMode = intialValue =>{
    const [darkMode, setDarkMode] = useLocalStorage(darkMode);
    
    return [darkMode, setDarkMode]
}

export default useDarkMode;