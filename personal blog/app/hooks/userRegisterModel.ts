import { create } from "zustand";

interface RegisterModelStore{
    isOpen:boolean;
    onOpne :()=> void;
    onClose:()=> void;
}

const userRegisterModel = create<RegisterModelStore>((set)=>({
    isOpen:false,
    onOpne : () => set({isOpen:true}),
    onClose : () => set({isOpen:false})
}))

export default userRegisterModel;