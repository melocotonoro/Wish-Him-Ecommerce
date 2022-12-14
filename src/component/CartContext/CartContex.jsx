import React, {createContext,useState} from 'react'

export const CartContext= createContext();

    const Context=({children})=>{

        const [cart,setCart]=useState([])

            // Agregar items al carrito 
            const addItem=(detail,amount)=>{
                let copyCart

                    let searchProd= cart.find(el=>el.id===detail.id);

                    if(searchProd){
                            searchProd.amount+=amount;
                            copyCart=[...cart]
                    }
                    else{ 
                            searchProd={...detail,amount:amount}
                            copyCart=[...cart,searchProd]
                }
                setCart(copyCart)
        }

                //Remover objeto unico 
                const removeItem=(id)=>{
                        let deleteItem= cart.filter(prop=>prop.id!==id)
                            setCart(deleteItem)
                    }

                    //elimina todos los productos de Cart
                        const clear=()=>{setCart([])}

                        //Si encuentra el producto filtrando por su Id
                        const isInCart=(id)=>cart.some((prod)=>prod.id=== id)

                            //Va a sumar la cantidad de productos agregados en Cart
                            const countProp=()=>{
                                let newObj=[...cart]
                                    let addAmount=0

                                        newObj.forEach((product)=>{
                                            addAmount=addAmount+product.amount
                            })
                                return addAmount
                        }

                            //valor total por poducto 
                            const totalPrice = () => {
                                return cart.reduce((id, el) =>id + el.amount * el.price, 0)
                            }

                            return(
                                <CartContext.Provider value={{addItem,removeItem,clear,isInCart,countProp,totalPrice, cart}}>
                                    {
                                    children
                                    }
                                </CartContext.Provider>
                            )
}

export default Context