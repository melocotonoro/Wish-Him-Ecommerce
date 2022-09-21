import React, { createContext,useState} from 'react'

export const CartContext= createContext();

const Context=({children})=>{

//estado de cart
const [cart,setCart]=useState([])

const addItem=(detail,amount)=>{

let copyCart
//Filtra si esta el objeto en el array
let searchProd= cart.find(el=>el.id===detail.id);

//Si está el obj, a la propiedad "amount" del objeto nuevo creado "searchProd", le sumo la nueva cantidad 
    if(searchProd){
        searchProd.amount+=amount;
        copyCart=[...cart]
    }
    else{
        //al producto le sumo la propiedad amount 
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

//Va a sumar todos productos agregados en Cart
const countProp=()=>{
let newObj=[...cart]
let addAmount=0

newObj.forEach((product)=>{
    addAmount=addAmount+product.amount
})
return addAmount
}

return(
    <CartContext.Provider value={{addItem,removeItem,clear,isInCart,countProp}}>
        {
        children
        }
    </CartContext.Provider>
)
}

export default Context