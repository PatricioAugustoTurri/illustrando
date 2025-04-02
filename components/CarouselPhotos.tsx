"use client"
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

function CarouselPhotos() {

    return (
        <div>
            <Carousel className="w-full" plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                    <CarouselItem className="flex justify-center">
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent>
                                <img src="/NubeH.jpeg" alt="mundo" className="w-full h-full" />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent>
                                <img src="/StellaH.jpeg" alt="mundo" className="w-full h-full" />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent>
                                <img src="/MundoH.jpeg" alt="mundo" className="w-full h-full" />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent>
                                <img src="/LibroH.jpeg" alt="mundo" className="w-full h-full" />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent>
                                <img src="/ConchaH.jpeg" alt="mundo" className="w-full h-full" />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselPhotos;

/*

   <div className="hidden sm:grid sm:grid-cols-3 gap-2 justify-center items-center">
                <img src="/mundo.jpg" alt="mundo" className="w-full h-full cursor-pointer" onClick={() => router.push('/category/stampe/mundo')} />
                <img src="/nubes.jpg" alt="nubes" className="w-full h-full cursor-pointer" onClick={() => router.push('/category/stampe/nubes')} />
                <img src="/setlla.jpg" alt="setlla" className="w-full h-full cursor-pointer" onClick={() => router.push('/category/stampe/setlla')} />
            </div>
*/