"use client";
import {createContext,useContext,useEffect,useMemo,useState,ReactNode} from "react";
import {products,Product} from "@/lib/data";
type CartLine={product:Product;quantity:number};
type CartContextType={items:CartLine[];count:number;subtotal:number;add:(p:Product)=>void;change:(id:string,qty:number)=>void;remove:(id:string)=>void;clear:()=>void};
const CartContext=createContext<CartContextType|null>(null);
export function CartProvider({children}:{children:ReactNode}){const [items,setItems]=useState<CartLine[]>([]);useEffect(()=>{try{const saved=localStorage.getItem("gb-cart");if(saved)setItems(JSON.parse(saved));}catch{}},[]);useEffect(()=>{localStorage.setItem("gb-cart",JSON.stringify(items));},[items]);const value=useMemo(()=>({items,count:items.reduce((s,i)=>s+i.quantity,0),subtotal:items.reduce((s,i)=>s+i.quantity*i.product.price,0),add:(p:Product)=>setItems(old=>{const found=old.find(i=>i.product.id===p.id);return found?old.map(i=>i.product.id===p.id?{...i,quantity:i.quantity+1}:i):[...old,{product:p,quantity:1}]}),change:(id:string,qty:number)=>setItems(old=>old.map(i=>i.product.id===id?{...i,quantity:Math.max(1,qty)}:i)),remove:(id:string)=>setItems(old=>old.filter(i=>i.product.id!==id)),clear:()=>setItems([])}),[items]);return <CartContext.Provider value={value}>{children}</CartContext.Provider>}
export function useCart(){const c=useContext(CartContext);if(!c)throw new Error("useCart must be used inside CartProvider");return c;}
