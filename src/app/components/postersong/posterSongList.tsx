import PostItems from "./posterSongItem";

export default function PostList(props : any){
    const {data} = props;
    return(
        <>  
            <div className="mt-[20px] grid xl:grid-cols-5 xl:gap-[20px] lg:grid-cols-3 gap-[20px] grid-cols-2 ">

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