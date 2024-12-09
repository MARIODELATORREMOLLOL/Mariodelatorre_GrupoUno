import { RiseLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="container mx-auto flex justify-center items-center h-[50vh] bg-black">
            <RiseLoader color="#FFD700" size={40} />
        </div>
    );
}
