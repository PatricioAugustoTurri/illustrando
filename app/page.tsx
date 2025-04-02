
import BannerProduct from "@/components/BannerProduct";
import CarouselPhotos from "@/components/CarouselPhotos";
import CategoriesHome from "@/components/CategoriesHome";
import ProducttiDestacati from "@/components/ProducttiDestacati";

function HomePage() {
  
  return (
    <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
      <CarouselPhotos />
      <CategoriesHome/>
      <ProducttiDestacati />
      <BannerProduct />
    </div>
  )
}

export default HomePage;