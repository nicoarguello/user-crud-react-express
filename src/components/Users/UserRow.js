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
                <a href="view-user.html" className="btn btn-info btn-sm"><i className="fa fa-eye"></i></a>
                <a href="edit-user.html" className="btn btn-warning btn-sm"><i className="fa fa-user-edit"></i></a>
                <a className="btn btn-danger btn-sm delete-button"><i className="fa fa-trash"></i></a>
            </div>
            </td>
        </tr>
    )
}

export default UserRow;