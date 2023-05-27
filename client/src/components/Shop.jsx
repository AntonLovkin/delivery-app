function Shop({ data, addCartItem }) {

  const styles = {
    list: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '15px',
      margin: '0px auto',
      padding: '2rem',
    },
    item: {
      textAlign: 'center',
      minWidth: '200px',
      minHeight: '200px',
      padding: '10px',
      color: 'blue',
      fontSize: '2rem',
      fontWeight: 'bold',
      border: '2px solid none',
      borderRadius: '20px',
      backgroundColor: '#fff',
      boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2)',
    },
    button: {
      fontSize: '1rem',
    }
  };

  return (
    <>
      <ul style={styles.list}>
        {data.meals.map(item =>
          <li key={item._id} style={styles.item}>
            <h5>{item.name} : {item.price}$</h5>
            <button style={styles.button} onClick={() => addCartItem(item._id)}>add to cart</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default Shop