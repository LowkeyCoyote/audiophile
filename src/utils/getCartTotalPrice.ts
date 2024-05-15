import { ItemState } from '../types/types';

export default function getCartTotalPrice(cart : ItemState[]){
    return cart.reduce((acc : number, curval :ItemState) => (
        acc += parseInt(curval.price) * curval.quantity
    ), 0)
}

