export default function NotFound() {
    return (
        <div class="max-w-6xl mx-auto p-4 flex items-center justify-center min-h-[60vh]">
            <div class="text-center">
                <div class="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</div>
                <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">Page Not Found</h1>
                <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <a 
                    href="/" 
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Go back home
                </a>
            </div>
        </div>
    );
}