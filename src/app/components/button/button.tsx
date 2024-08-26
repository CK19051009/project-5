export default function Button(props : {text:string}){
    const {text = ""} = props;

    return (

        <>
             <button className="w-full bg-primary text-white rounded-[6px] text-center font-bold text-[16px] py-[14px]  "
                type="submit"
              >
                  {text}

              </button>
        
        </>
    );
}