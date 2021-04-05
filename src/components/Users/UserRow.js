import { Link } from "react-router-dom"

const UserRow = (props) => {
    return (
        <tr>
            <td>1</td>
            <td>Juan Eduardo</td>
            <td>Perez Galindo</td>
            <td> +57-321587987</td>
            <td>juan@gamil.com</td>
            <td style={{width: "1rem"}}>
            <div className="btn-group">
                <Link to="user/view/1" className="btn btn-info btn-sm"><i className="fa fa-eye"/></Link>
                <Link to="user/edit/1" className="btn btn-warning btn-sm"><i className="fa fa-user-edit"/></Link>
                <a className="btn btn-danger btn-sm delete-button"><i className="fa fa-trash"/></a>
            </div>
            </td>
        </tr>
    )
}

export default UserRow;
