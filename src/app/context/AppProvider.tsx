"use client"
import React, { createContext, useContext, useState } from "react";

// Định nghĩa kiểu dữ liệu cho AuthenContext
interface AuthenContextType {
  token: string | null;
  wishlist: string[];
  setToken: (token: string | null) => void;
  setWishlist: (wishlist: string[]) => void;
}

// Tạo context với kiểu dữ liệu rõ ràng
const AuthenContext = createContext<AuthenContextType | undefined>(undefined);

export const AuthenProvider = ({ children, tokenAuthen , wishlist: initialWishlist}: { children: React.ReactNode, tokenAuthen: string , wishlist: string[]}) => {
  const [token, setToken] = useState<string | null>(tokenAuthen || null);
  const [wishlist, setWishlist] = useState<string[]>(initialWishlist);
  return (
    <AuthenContext.Provider value={{ token, setToken, wishlist, setWishlist }}>
      {children}
    </AuthenContext.Provider>
  )
}

export const useAuthen = () => {
  const context = useContext(AuthenContext);
  if (!context) {
    throw new Error("useAuthen must be used within an AuthenProvider");
  }
  return context;
};