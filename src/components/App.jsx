import {useState } from "react"
import SearchbarForm from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { fetchImage } from "./Fetch/Fetch"
import { Button } from "./Button/Button"
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react"



export function App() {
  const [searchName,setSearchName] = useState('');
  const [ page,setUseState] = useState(1);
  const [isLoading,setIsLoading] = useState(false);
  const [images,setImages] = useState([]);
   const [ per_page,setPer_page] = useState(12);
  

  const hendleFormSubmit = searchName => {
    setSearchName(searchName);
    setImages([]);
        setUseState(1)
   }
 
    const loadMore = () => {
      setUseState(prevState => prevState + 1)
      
  };

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    fetchImage(page, searchName).then(data => {
            return (
              data.hits.length === 0
                ? toast.error('Oops! We did not find any images matching your request. Please try again.')
                : setImages(prevState => [...prevState, ...data.hits],
                 setIsLoading (false),
                  )
                  )
          })
          .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
         
        },[page,searchName])
  

  

  return (
     <div>
        <SearchbarForm onSubmit={hendleFormSubmit}/>
       <ToastContainer autoClose={2000} />
        <ImageGallery images={images} />
     { images.length >=per_page && <Button handleClick={loadMore} />}
         </div>
  )

}