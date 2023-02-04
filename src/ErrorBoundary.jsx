import { Component } from "react";

// must be a class component (no functional replacement).
export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // typically, we would send this to a error logging service (like sentry or track.js)
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        // error state UI
        // makes it reusable for any component.
        this.props.fallback
      );
    }

    // render the cildren if there is no error!
    return this.props.children;
  }
}
