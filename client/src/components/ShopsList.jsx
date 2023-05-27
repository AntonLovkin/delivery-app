import { Shop } from '.'

function ShopsList({ data }) {

  return (
      <div>
          <h2>ShopsList</h2>
      <ul>
        {data?.length > 0
          ? data.map(shop =>
            <li key={shop.title}>
              <Shop data={shop} />
            </li>)
          : <h2>Sorry, but we don't have any stores...</h2>
        }
      </ul>
    </div>
  )
}

export default ShopsList