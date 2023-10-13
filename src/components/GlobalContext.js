import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {

    // Mettez ici les valeurs et fonctions que vous souhaitez partager
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")??"{}"));

    const addToCart = (item) => {

        setCart((prevCart) =>{
            console.log("ITEM",item);
            const newItem = {...item}
            const newCart = JSON.parse(JSON.stringify(prevCart))
            const prevItem = newCart[newItem.name];
            console.log("START",prevCart);
            if(prevItem){
                prevItem.amount+=newItem.amount
            }else{
                newCart[newItem.name] = newItem;
            }
            console.log("END",newCart);
            localStorage.setItem("cart", JSON.stringify(newCart))
            return newCart;
        });
    };

    const deleteItem = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[item.name]; // Supprime l'élément ayant le même nom

            // Mettez à jour le panier dans localStorage
            localStorage.setItem("cart", JSON.stringify(newCart));

            return newCart;
        });
    };

    const decrementAmount = (itemName) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[itemName]) {
                if (newCart[itemName].amount > 1) {
                    newCart[itemName].amount -= 1;
                    // Mettez à jour le panier dans localStorage
                    localStorage.setItem("cart", JSON.stringify(newCart));
                }
            }
            return newCart;
        });
    };

    const incrementAmount = (itemName) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[itemName]) {
                newCart[itemName].amount += 1;
                // Mettez à jour le panier dans localStorage
                localStorage.setItem("cart", JSON.stringify(newCart));
            }
            return newCart;
        });
    };



    // Vous pouvez ajouter d'autres états et fonctions ici

    return (
      <GlobalContext.Provider value={{ cart, addToCart , deleteItem, incrementAmount, decrementAmount}}>
        {children}
      </GlobalContext.Provider>
    );
  };

export { GlobalContext};