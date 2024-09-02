

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 以显示回退 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 你可以将错误日志记录到你的服务
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义回退 UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}


