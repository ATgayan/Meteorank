import logo from '../assets/images/loading.png';

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img 
                src={logo} 
                alt="Loading..." 
                className="w-32 h-32 mb-4 animate-pulse" 
            />
            <p className="text-gray-700 text-lg">Loading, please wait...</p>
        </div>
    );
}

export default Loading;