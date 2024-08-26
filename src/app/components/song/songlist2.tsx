
import Songitems2 from "./songitems2";

export default function Songlist2(props : any){

    const { data } = props;
    return (
        <>
            <div className="mt-[20px] grid grid-cols-1 gap-y-[10px] text-white">
                  {/* item */}
                 {data.map((item:any , index:number) =>(
                    <Songitems2 
                        key={index}
                        image = {item.image}
                        title = {item.title}
                        singer = {item.singer}
                        link = {item.link}
                        time = {item.time}
                        id = {item.id}
                        audio = {item.audio}
                        wishlist = {item.wishlist}

                    />
                 ) )}
                  {/* end item */}

                </div>
        </>
    );
}