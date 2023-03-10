const Character = ({data, removeCharacter}) => {
  const { id, name, email } = data

  const handleClick = () => {
    removeCharacter(id)
  }

  return(
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button type="button" 
          onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Character