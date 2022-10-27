import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGallerySteled } from "./ImageGalleryStyled";




export const ImageGallery = ({ images }) => {
    
    return (
         <ImageGallerySteled>
            {images.map(image => (
                <ImageGalleryItem 
                    key={image.id} 
                        image = { image.webformatURL }
                        text = { image.tags }
                        imageLarge = { image.largeImageURL }  />
                ))}
                    </ImageGallerySteled>
    )
}

   
   



