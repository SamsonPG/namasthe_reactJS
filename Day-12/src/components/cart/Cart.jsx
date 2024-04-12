import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { cloudinaryLink } from "../../constant";
import { clearCart } from "../../store/cartSlice";

const Cart = () => {
  const { cart, total } = useSelector(
    (store) => ({
      cart: store.cartFoodWilla.cart,
      total: store.cartFoodWilla.total,
    }),
    (prev, next) => {
      return prev.cart === next.cart && prev.total === next.total;
    }
  );

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
    <div className="flex justify-center">
    <h1 className="font-bold text- m-5">Cart - {cart.length} Foods</h1>
        <button
          className="bg-red-700 rounded-lg px-2 m-5 text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
</div>


      {cart.length === 0 ? (
        <div className="text-center my-5">
          <p className="font-bold">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex m-5">
          <div className="flex flex-wrap border rounded-lg shadow-lg m-4 p-4 bg-zinc-100">
            {cart.map((item) => (
              <div key={item.id} className="w-full">
                <div className="m-2">
                  <div className="flex justify-between">
                    <div className="flex w-[50px] h-[50px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        className="h-full w-full object-cover object-center"
                        src={cloudinaryLink + item.imageId}
                        alt={item.name}
                      />
                    </div>
                    <div className="m-2 flex flex-col items-center">
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="mb-0">Category: {item.category}</p>
                      <p className="font-bold mb-0">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex justify-end m-2">
                      <p className="font-bold">
                        Price:{" "}
                        {(
                          (item.defaultPrice ? item.defaultPrice : item.price) /
                          100
                        ).toFixed(2)}
                        /-
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full border-b-2"></div>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border rounded-lg shadow-lg m-4 p-4 bg-zinc-100">
              <h1 className="font-bold">
                Total - {(total / 100).toFixed(2)}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;


// import { useSelector } from "react-redux";
// import { cloudinaryLink } from "../../constant";

// const Cart = () => {
//   const { cart, total } = useSelector((store) => ({
//     cart: store.cartFoodWilla.cart,
//     total: store.cartFoodWilla.total,
//   }));

//   return (
//     <>
//       <h1 className="font-bold text-3xl m-5">Cart - {cart.length} Foods</h1>
//       <div className="flex m-5">
//       <div className="flex flex-wrap border rounded-lg shadow-lg m-4 p-4 bg-zinc-100">
//   {cart.map((item) => (
//     <div key={item.id} className="w-full">
//       <div className="m-2">
//       <div className="flex justify-between ">
//   <div className="flex w-[50px] h-[50px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//     <img
//       className="h-full w-full object-cover object-center"
//       src={cloudinaryLink + item.imageId}
//       alt={item.name}
//     />
//   </div>
//   <div className=" m-2">
//     <h4 className="font-bold">{item.name}</h4>
//     <p>Category: {item.category}</p>
//   </div>

//   <div className="flex justify-end m-2">
//     <p className="font-bold">Price: {item.defaultPrice ? item.defaultPrice / 100 : item.price / 100}/-</p>
//   </div>
// </div>

//       </div>
//       <div className="w-full border-b-2"></div> {/* Add a line */}
//     </div>
//   ))}
// </div>
// <div className="md:w-1/2 lg:w-1/3 xl:w-1/4">
//   <div className="border rounded-lg shadow-lg m-4 p-4 bg-zinc-100">
//     <h1 className="font-bold">Total - {total / 100}</h1>
//   </div>
// </div>
// </div>

//     </>
//   );
// };

// export default Cart;
