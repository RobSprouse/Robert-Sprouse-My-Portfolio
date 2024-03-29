// COMMENT: Used Github co-pilot to generate an error boundary component that displays a message if an error occurs in the app.
import React from "react";

class ErrorBoundary extends React.Component {
     constructor(props) {
          super(props);
          this.state = { hasError: false };
     }

     static getDerivedStateFromError(error) {
          // Update state so the next render will show the fallback UI.
          return { hasError: true };
     }

     componentDidCatch(error, errorInfo) {
          // You can also log the error to an error reporting service
          console.log(error, errorInfo);
     }

     render() {
          if (this.state.hasError) {
               // You can render any custom fallback UI
               return <h1>Something went wrong.</h1>;
          }

          return this.props.children;
     }
}

// COMMENT: export ErrorBoundary component
export default ErrorBoundary;
