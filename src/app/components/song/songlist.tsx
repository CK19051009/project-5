
import SongItems from "./songitems";


export default function SongList(props : any) {
    const {data} = props; 
    return (
        <>

            <div className="grid grid-cols-1 gap-y-[12px] mt-[20px] "
                song-list=""
            >

                {data.map((item : any , index : number) => (
                    <SongItems
                        key={index}
                        image = {item.image}
                        title = {item.title}
                        singer = {item.singer}
                        listen = {item.listen}
                        audio = {item.audio}
                        id = {item.id}
                        wishlist = {item.wishlist}
    
 
                 />
                ) )}
               
            </div>
        </>
    );
}