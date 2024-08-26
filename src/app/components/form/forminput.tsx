export default function FormInput(props : any){
    const {
        label = "",
        type = "text",
        name = "",
        required = false,
        placeholder ="",
        id = ""




    } = props;

    return (

        <>
        
            <div className="mb-[15px] ">
                {label &&
                    <label className="block mb-[5px]"
                        htmlFor={id}
                    >
              
              
                        <span  className="font-[600] text-[14px] text-white">{name}</span>
                        <span className="text-red-500 ml-[5px]">*</span>
                    </label>
                
                }
                <input
                    type={type}
                    name={name}
                    required = {required}
                    placeholder={placeholder}
                    id={id}
                    className="w-full text-[14px] font-[600] px-[16px] outline-none  rounded-[6px] h-[50px]"


                
                
                
                />

              </div>        
        </>
    );
}