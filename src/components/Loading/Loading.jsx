import {RiseLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <RiseLoader color="#636366" size={70}/>
        </div>
    )
}