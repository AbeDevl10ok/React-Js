
export function Squared ({index,children,handleBoard,isSelected}){
  const className = `square ${isSelected ? 'is-selected' : ''}`    //con el click le paso el index a la funcion para que actualize el contenido tablero
    const handleClick = () => {
        handleBoard(index)
      }
    return(
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }
  