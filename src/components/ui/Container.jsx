export default function Container({children}){

    return(
        <div  className="max-w-[1920px] mx-auto xl:px-[64px] lg:px-[40px] md:px-[30px] px-[20px]">
            {children}
        </div>
    )
}