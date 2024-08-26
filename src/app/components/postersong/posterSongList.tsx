import PostItems from "./posterSongItem";

export default function PostList(props : any){
    const {data} = props;
    return(
        <>  
            <div className="mt-[20px] grid grid-cols-5 gap-[20px]">

                {data.map((item: any , index:number) =>(
                    <PostItems
                        key={index}
                        image ={item.image}
                        title = {item.title}
                        desc = {item.desc}
                        link = {item.link}
                    
                    />
                ))}
            </div>
        </>
    )
}