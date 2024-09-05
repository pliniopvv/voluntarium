import { useNavigate } from "react-router-dom"

const withRouter = ComponentWrapped => (props) => {
    const navigate = useNavigate();

    return <ComponentWrapped
        navigate={navigate}
        {...props}
    />

}

export default withRouter;