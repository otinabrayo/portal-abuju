import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-zinc-500 flex items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold text-rose-700 mb-4">Oops! Something went wrong 😕</h2>
                        <p className="text-gray-600 mb-6">
                            Don't worry, it's not you - it's us! We're having a little trouble right now.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                            >
                                Try Again
                            </button>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
                            >
                                Go to Home Page
                            </button>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-6 p-4 bg-gray-100 rounded text-sm text-gray-600">
                                <p className="font-bold mb-2">Error Details (Development Only):</p>
                                <pre className="whitespace-pre-wrap">
                                    {this.state.error && this.state.error.toString()}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
