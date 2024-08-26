export default function BannerPages(){


    return(
        <>
            <div 
                className="w-[543px]"
            >
                <div 
                className="w-full flex items-center rounded-[15px] bg-cover"
                style={{backgroundImage : "url(/demo/bg_section_1.png)"}}
                >

                    <div className="flex-1 mr-[34px] ml-[30px]">
                        <div className="font-bold text-[32px] text-white">
                        Nhạc EDM
                        </div>
                        <div className="font-[500] text-[14px] text-white line-clamp-4">
                        Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                        </div>
                    </div>

                    <div className="w-[215px] mt-[40px] mr-[21px]">
                            <img 
                            src="/demo/person_section1.png" alt="person1" 
                            className="w-full h-auto"
                            />
                    </div>


                
                </div>
              
          </div>
        </>
    );
}